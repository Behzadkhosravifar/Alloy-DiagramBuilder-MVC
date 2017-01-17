//YUI().use(
//     'aui-diagram-builder',
//     function (Y) {

//         var availableFields = [
//           {
//               iconClass: 'diagram-node-start-icon',
//               label: 'Start',
//               type: 'start'
//           },
//           {
//               iconClass: 'diagram-node-task-icon',
//               label: 'Task',
//               type: 'task'
//           },
//           {
//               iconClass: 'diagram-node-state-icon',
//               label: 'State',
//               type: 'state'
//           },
//           {
//               iconClass: 'diagram-node-join-icon',
//               label: 'Join',
//               type: 'join'
//           },
//           {
//               iconClass: 'diagram-node-fork-icon',
//               label: 'Fork',
//               type: 'fork'
//           },
//           {
//               iconClass: 'diagram-node-condition-icon',
//               label: 'Condition',
//               type: 'condition'
//           },
//           {
//               iconClass: 'diagram-node-end-icon',
//               label: 'End',
//               type: 'end'
//           }
//         ];

//         var jsonData = [
//                 {
//                     name: 'StartNode',
//                     type: 'start',
//                     xy: [10, 10]
//                 },
//                 {
//                     name: 'Condition',
//                     type: 'condition',
//                     xy: [260, 16]
//                 },
//                 {
//                     name: 'Fork',
//                     type: 'fork',
//                     xy: [183, 99]
//                 },
//                 {
//                     name: 'Task1',
//                     type: 'task',
//                     xy: [38, 158]
//                 },
//                 {
//                     name: 'Task2',
//                     type: 'task',
//                     xy: [262, 221]
//                 },
//                 {
//                     name: 'Join',
//                     type: 'join',
//                     xy: [99, 300]
//                 },
//                 {
//                     name: 'State',
//                     type: 'state',
//                     xy: [287, 377]
//                 },
//                 {
//                     name: 'Task3',
//                     type: 'task',
//                     xy: [100, 444]
//                 },
//                 {
//                     name: 'EndNode',
//                     type: 'end',
//                     xy: [326, 500]
//                 }
//         ];
         


//         var diagramBuilder = new Y.DiagramBuilder(
//           {
//               availableFields: availableFields,
//               boundingBox: '#myDiagramContainer',
//               fields: jsonData,
//               render: true,
//               srcNode: '#myDiagramBuilder'
//           }
//         );

//         var x = diagramBuilder.toJSON();

//         alert(x.nodes);

//         diagramBuilder.connectAll(
//           [
//             {
//                 connector: {
//                     name: 'TaskConnector1'
//                 },
//                 source: 'StartNode',
//                 target: 'Condition'
//             },
//             {
//                 connector: {
//                     name: 'TaskConnector2'
//                 },
//                 source: 'Condition',
//                 target: 'Fork'
//             },
//             {
//                 connector: {
//                     name: 'TaskConnector3'
//                 },
//                 source: 'Fork',
//                 target: 'Task1'
//             },
//             {
//                 connector: {
//                     name: 'TaskConnector4'
//                 },
//                 source: 'Fork',
//                 target: 'Task2'
//             },
//             {
//                 connector: {
//                     name: 'TaskConnector5'
//                 },
//                 source: 'Task1',
//                 target: 'Join'
//             },
//             {
//                 connector: {
//                     name: 'TaskConnector6'
//                 },
//                 source: 'Task2',
//                 target: 'Join'
//             },
//             {
//                 connector: {
//                     name: 'TaskConnector7'
//                 },
//                 source: 'Join',
//                 target: 'State'
//             },
//             {
//                 connector: {
//                     name: 'TaskConnector8'
//                 },
//                 source: 'State',
//                 target: 'Task3'
//             },
//             {
//                 connector: {
//                     name: 'TaskConnector9'
//                 },
//                 source: 'Task3',
//                 target: 'EndNode'
//             }
//           ]
//         );
//     }
//   );


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