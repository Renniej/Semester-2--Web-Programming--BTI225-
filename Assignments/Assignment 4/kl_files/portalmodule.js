/**
 * This javascript module contains objects that control the
 * display options for a module in a portal layout.
 *
 * The code relies on a specific DOM structure of a module
 * - The module element must have an H2 as a child element
 * - That H2 must have child elements with classes:
 *   - span with class moduleTitle - containing the module's title
 *   - moduleToggleLink - if the module is toggleable.
 *   - moduleCloseLink - if the module is closable.
 *   - moduleDetachLink - if the module is detachable.
 *
 * If the module's title is suppressed, the module element must have a
 * class name of "noTitle".
 */
var portalmodule = {};

/**
 * The DisplayController object controls the behavior of the close,
 * maximize, minimize, and detach links on a module.
 *
 * It also controls things like highlighting the module when it is
 * clicked.
 */
portalmodule.DisplayController = Class.create();
portalmodule.DisplayController.prototype =
{
  /**
   * Creates a new DisplayController object.  A single DisplayController object
   * should be instantiated for an entire modular layout.
   *
   * @param moduleClass The CSS class of elements that represent modules (e.g. "portlet")
   * @param accessibleControlsContainer The top-level HTML element of the accessible
   *     reordering controls.  This is necessary so that when a module is removed,
   *     the item is removed from the accessible controls.  If no drag and drop is
   *     present, null may be passed in as this value
   * @param displayControllerUrl The url to the server-side component that will persist
         the changes made by the various operations
   * @param contextParameters Query-string style parameters that will be passed to the
   *     display controller url as request parameters in order to give the call
   *     contextual information.
   */
  initialize: function( moduleClass, accessibleControlsContainer, displayControllerUrl, contextParameters )
  {
    var i;

    // This is the format that the module ids must follow (essentially "some_string:the_id")
    this.format = /^[^:\-](?:[A-Za-z0-9\-\:]*)[:](.*)$/;
    this.displayControllerUrl = displayControllerUrl;
    if ( contextParameters )
    {
      this.contextParameters = contextParameters.toQueryParams();
    }
    else
    {
      this.contextParameters = {};
    }

    var accessibleControls = $(accessibleControlsContainer);
    if ( accessibleControls )
    {
      this.keyboardControlLink = $(accessibleControls.getElementsByTagName('a')[0]);
      this.accessibleColumnSelects = $A($(accessibleControlsContainer).getElementsByTagName("select"));
      for ( i = 0; i < this.accessibleColumnSelects.length; i++ )
      {
        this.accessibleColumnSelects[i] = $(this.accessibleColumnSelects[i]);
      }
    }
    var modules = [];
    i = 0;
    var curCol = $('column'+(i++));
    while ( curCol )
    {
      for ( var j = 0; j < curCol.childNodes.length; j++ )
      {
        var childNode = curCol.childNodes[j];
        if ( childNode.className && page.util.hasClassName( childNode, moduleClass ) )
        {
          modules.push( $(childNode) );
        }
      }
      curCol = $('column'+(i++));
    }
    modules.each( function( module )
    {
      var i;
      // Register event handlers for max/min, close, detach, and highlighting to the module.
      // The Event handlers have the current module bound as one of their parameters
      var header = $(module.getElementsByTagName("h2")[0]);
      var spans = header.getElementsByTagName("span");
      var reorder = null;
      for ( i = 0; i < spans.length; i++ )
      {
        if ( page.util.hasClassName(spans[i],'reorder') )
        {
          reorder = $(spans[i]);
          break;
        }
      }
      //Get the edit links
      var divs = module.getElementsByTagName("div");
      var editLinks = [];
      for ( i = 0; i < divs.length; i++ )
      {
        if ( page.util.hasClassName(divs[i], "edit_controls" ) )
        {
          editLinks = divs[i].getElementsByTagName("a");
        }
      }
      var toggleLink = null;
      var closeLink = null;
      var detachLink = null;
      for ( i = 0; i < editLinks.length; i++ )
      {
        if ( page.util.hasClassName(editLinks[i],'moduleToggleLink') )
        {
          toggleLink = $(editLinks[i]);
        }
        else if ( page.util.hasClassName(editLinks[i],'moduleCloseLink') )
        {
          closeLink = $(editLinks[i]);
        }
        else if ( page.util.hasClassName(editLinks[i],'moduleDetachLink') )
        {
          detachLink = $(editLinks[i]);
        }
      }
      if ( toggleLink )
      {
        Event.observe( toggleLink, "click", this.onModuleToggle.bindAsEventListener( this, module ) );
      }
      if ( closeLink )
      {
        Event.observe( closeLink, "click", this.onModuleClose.bindAsEventListener( this, module ) );
      }
      if ( detachLink )
      {
        Event.observe( detachLink, "click", this.onModuleDetach.bindAsEventListener( this, module ) );
      }
      // Only add the highlighting mouse click and mouse over behavior if we're dealing with customizable tabs
      // Customizable tabs may contain pinned modules which cannot be reordered and event handler should handle
      // pinned and reorderable modules differently.
      if ( accessibleControls )
      {
        Event.observe( header, "mousedown", this.onHeaderMouseDown.bindAsEventListener( this, module, reorder ) );
        Event.observe( header, "mouseup", this.onHeaderMouseUp.bindAsEventListener( this, module, reorder ) );
        Event.observe( header, "mouseover", this.onHeaderMouseOver.bindAsEventListener( this, module, reorder ) );
        Event.observe( header, "mouseout", this.onHeaderMouseOut.bindAsEventListener( this, module, reorder ) );
      }

    }.bind( this ) );
  },

  /**
   * Event handler for a mouse press on the module header.
   * Highlights the module.
   * @param event The DOM event for the mouse press.
   * @param module The module that this event affects.
   */
  onHeaderMouseDown: function( event, module, reorderSpan )
  {
	if ( reorderSpan )
	{
     // module.setStyle({borderColor: "#CC9900", backgroundColor: "#FFF1C5"});
	  module.addClassName('module-dragstate');
	}
  },

  /**
   * Event handler for a mouse release on the module header.
   * Un-highlights the module.
   * @param event The DOM event for the mouse release.
   * @param module The module that this event affects.
   */
  onHeaderMouseUp: function( event, module, reorderSpan )
  {
	if ( reorderSpan )
	{
      //module.setStyle({borderColor: "", backgroundColor: "" });
	   module.removeClassName('module-dragstate');
    }
  },

  /**
   * Event handler for a mouse over on the module header.
   * @param event The DOM event for the mouse press.
   * @param module The module that this event affects.
   */
  onHeaderMouseOver: function( event, module, reorderSpan )
  {
	var header = $(module.getElementsByTagName("h2")[0]);
    if ( reorderSpan )
    {
	  //reorderSpan.setStyle({opacity: 0.99});
      header.setStyle({cursor:"move"});
    }
    else
    {
      header.setStyle({cursor:"not-allowed" });
    }
  },

  /**
   * Event handler for a mouse out on the module header.
   * @param event The DOM event for the mouse release.
   * @param module The module that this event affects.
   */
  onHeaderMouseOut: function( event, module, reorderSpan )
  {
	if ( reorderSpan )
	{
      //reorderSpan.setStyle({opacity: 0});
	}
    var header = $(module.getElementsByTagName("h2")[0]);
    header.setStyle({cursor:"default"});
  },

  /**
   * Event handler that detaches (i.e. opens in a new window) the
   * specified module.
   * @param event The DOM event for the mouse click.
   * @param module The module that this event affects.
   */
  onModuleDetach: function( event, module )
  {
    var detachLink = module.down(".moduleDetachLink");
    var moduleId = module.id.match(this.format)[1];
    var url = detachLink.href;
    var strFeatures = "minimize=no,maximize=no,resizable=yes,dependent=yes,menubar=no,location=0,status=0,scrollbars=yes,toolbar=no,left=100,top=100,width=1096";
    var newWindow = window.open( url, "DetachModule"+moduleId, strFeatures);
    newWindow.focus();
    Event.stop( event );
  },

  /**
   * Event handler that closes the specified module.  A confirmation message
   * is displayed to the user.  If they confirm, then a call will be made to the
   * server to persist the change.
   *
   * The server will get the module id, the operation ("close"), and any additional contextParameters as request
   * parameters.
   * @param event The DOM event for the mouse click
   * @param module The module that this event affects.
   */
  onModuleClose: function( event, module )
  {
    var moduleTitle = module.down(".moduleTitle").innerHTML;
    if ( confirm( page.bundle.getString("portal.module.close.confirm", moduleTitle) ) )
    {
      var moduleId = module.id.match(this.format)[1];
      var params = Object.extend({ module_moduleId: moduleId, module_operation: "close", sessionId: getCookie('JSESSIONID') }, this.contextParameters );
      new Ajax.Request( this.displayControllerUrl,
      {
        method: 'post',
        parameters: params,
        requestHeaders: { cookie: document.cookie },
        onSuccess: this.afterModuleClose.bind( this, module )
      });
    }
    Event.stop( event );
  },

  /**
   * Callback for after a close module persist call is made.
   *
   * Expects JSON of the following form to be returned from the server:
   * - For a successful call : { "success" : "true" }
   * - For an unsuccessful call : { "success" : "false", "errorMessage", "localized error message" }
   *
   * If the call is successful, the module will be removed from the DOM and
   * from the accessible reordering controls (if any are present)
   *
   * If an error occurs, an inline recieip message is displayed
   *
   * @param module The module that will be closed.
   * @param req The XMLHttpRequest that was used to make the request.
   */
  afterModuleClose: function( module, req )
  {
    try
    {
      var result = req.responseText.evalJSON( true );
      if ( result.success != "true" )
      {
        new page.InlineConfirmation("error", result.errorMessage, true);
      }
      else
      {
        var moduleId = module.id.match(this.format)[1];
        if ( this.accessibleColumnSelects )
        {
          var moduleCount = 0;
          for ( var i = 0; i < this.accessibleColumnSelects.length; i++ )
          {
            var found = false;
            var options = this.accessibleColumnSelects[i].immediateDescendants();
            for ( var j = 0; j < options.length; j++ )
            {
              if ( options[j].value == moduleId )
              {
                found = true;
                Element.remove( options[j] );
              }
              else
              {
                moduleCount++;
              }
            }
          }

          if ( moduleCount === 0 )
          {
            this.keyboardControlLink.hide();
          }
        }
        Element.remove( module );
      }
    }
    catch( e )
    {
      // swallow this
    }
  },

  /**
   * Event handler that toggles the specified module from
   * expanded to contracted and vice versa.  A request will be
   * made to the server to persist the change.
   *
   * The server will get the module id, the operation ("collapse" or "expand"), and
   * any additional contextParameters as request parameters.
   *
   * @param event The DOM event for the mouse click
   * @param module The module that this event affects.
   */
  onModuleToggle: function( event, module )
  {
    var toggleLink = module.down(".moduleToggleLink");
    var toggleImg = toggleLink.down(0);
    var operation = null;
    if ( toggleImg.src.indexOf("portlet_contract.gif") >= 0 )
    {
      operation = "collapse";
    }
    else
    {
      operation = "expand";
    }

    var moduleId = module.id.match(this.format)[1];
    var params = Object.extend({ module_moduleId: moduleId, module_operation: operation, sessionId: getCookie('JSESSIONID') }, this.contextParameters );
    new Ajax.Request( this.displayControllerUrl,
    {
      method: 'post',
      parameters: params,
      requestHeaders: { cookie: document.cookie },
      onSuccess: this.afterModuleToggle.bind( this, module )
    });

    Event.stop( event );
  },

  /**
   * Callback for after a toggle module persist call is made.
   *
   * Expects JSON of the following form to be returned from the server:
   * - For a successful call : { "success" : "true" }
   * - For an unsuccessful call : { "success" : "false", "errorMessage", "localized error message" }
   *
   * If the call is successful, the module will be toggled from collapsed to expanded or expanded
   * to collapsed, depending on what state it was in before the call.
   *
   * If an error occurs, an inline receipt message is displayed.
   *
   * @param module The module that will be toggled.
   * @param req The XMLHttpRequest that was used to make the request.
   */
  afterModuleToggle: function( module, req )
  {
    try
    {
      var result = req.responseText.evalJSON( true );
      if ( result.success != "true" )
      {
        new page.InlineConfirmation("error", result.errorMessage, true);
      }
      else
      {
        var moduleTitle = module.down(".moduleTitle").innerHTML;
        var toggleLink = module.down(".moduleToggleLink");
        var toggleImg = toggleLink.down(0);
        if ( toggleImg.src.indexOf("portlet_contract.gif") >= 0 )
        {
          if ( module.hasClassName("noTitle") )
          {
            module.down("h2").removeClassName("noTitle");
            module.down("span.moduleTitle").show();
          }
        module.down(".collapsible").hide();
        var expandStr = page.bundle.getString("portal.module.expand", moduleTitle);
        toggleImg.src = getCdnURL( "/images/ci/ng/portlet_expand.gif" );
        toggleImg.alt = expandStr;
        toggleLink.title = expandStr;
		toggleLink.addClassName('expand');
        toggleLink.writeAttribute('aria-expanded','false');
      }
      else
      {
        if ( module.hasClassName("noTitle") )
          {
            module.down("h2").addClassName("noTitle");
            module.down("span.moduleTitle").hide();
          }
        module.down(".collapsible").show();
        var collapseStr = page.bundle.getString("portal.module.collapse", moduleTitle);
        toggleImg.src = getCdnURL( "/images/ci/ng/portlet_contract.gif" );
        toggleImg.alt = collapseStr;
        toggleLink.title = collapseStr;
		toggleLink.removeClassName('expand');
        toggleLink.writeAttribute('aria-expanded','true');
      }
      }
    }
    catch( e )
    {
      // swallow this
    }
  }
};
