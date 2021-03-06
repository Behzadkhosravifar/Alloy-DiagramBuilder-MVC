function DiagramDrower(parentId, containerId, builderId, nodes, connections, isReadonly, callBackDiagram) {
    $("#" + parentId).html('<div id="' + containerId + '"><div id="' + builderId + '"></div></div>');

    YUI().use('aui-diagram-builder', function (y) {
        $.getJSON(window.location.origin + "/api/diagramApi/GetAvailableFields", null, function (data) {
            if (isReadonly === true) data = [];
            var diagram = new y.DiagramBuilder(
            {
                availableFields: data,
                boundingBox: '#' + containerId,
                fields: nodes,
                srcNode: '#' + builderId
            }).render();

            diagram.connectAll(connections);

            if (isReadonly === true) ReadonlyDiagram(diagram);

            if (callBackDiagram !== undefined) callBackDiagram(diagram);
        });
    });
}

/*
 * Readonly the diagram
 */
function ReadonlyDiagram(diagram) {
    function detachRecursively(node) {
        node.get('children').each(detachRecursively);

        // You may also want to set the cursor to the default since it will 
        // change based on which elements the mouse is over.
        node.setStyle('cursor', 'auto');

        // You may want to detach specific events such as 'click' or 
        // 'mousedown' if you do not want to disable all events.
        node.detach();
    };

    diagram.on('render', function (event) {
        detachRecursively(diagram.get('boundingBox'));
    });
}


function SaveDiagram(diagram, diagramName, apiUrl, onSuccess, onFail) {
    var x = diagram.toJSON();
    x.DiagramId = diagram.DiagramId;

    if (diagramName === undefined || diagramName === null)
        x.DiagramName = diagram.DiagramName;
    else x.DiagramName = diagramName;

    $.post(window.location.origin + apiUrl, x,
    function (d) {
        onSuccess(d);
    }).fail(function (d) {
        onFail(d);
    });
};





// tooltip loader
//YUI().ready(
//  'aui-tooltip',
//  function (Y) {
//    new Y.Tooltip(
//      {
//        trigger: '#myDiagramBuilder',
//        cssClass: 'tooltip-help',
//        opacity: 1,
//        position: 'bottom'
//      }
//    ).render();
//  }
//);