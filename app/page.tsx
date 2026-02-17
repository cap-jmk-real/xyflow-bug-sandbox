'use client';

import {
  ReactFlow,
  Background,
  Controls,
  Panel,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './force-bug.css';
//import './fix.css';

import CustomNode from '@/components/CustomNode';

const nodeTypes = { custom: CustomNode };

const initialNodes: Node[] = [
  { id: '1', type: 'custom', position: { x: 100, y: 100 }, data: { label: 'Interactive node' } },
];
const initialEdges: Edge[] = [];

export default function FlowPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ padding: 24 }}>
      <div className="canvas-card">
        <header
          className="canvas-card-header"
          style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb', flexShrink: 0 }}
        >
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>@xyflow/react interactive-nodes</h2>
        </header>
        <div className="canvas-wrap">
          <div
            className="canvas-react-flow-wrap"
            style={{ flex: 1, minWidth: 0 }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
              noDragClassName="nodrag"
              noPanClassName="nopan"
              fitView
            >
              <Background />
              <Controls />
              <Panel position="top-left">
                <div
                  style={{
                    padding: 8,
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: 6,
                    fontSize: 12,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  Fix on. To see the bug: comment out <code>import &apos;./fix.css&apos;</code> in this file.
                </div>
              </Panel>
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
}
