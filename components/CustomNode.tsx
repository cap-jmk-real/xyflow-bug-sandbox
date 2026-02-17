'use client';

import { memo } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';

export type CustomNodeData = {
  label: string;
};

const CustomNode = memo(function CustomNode({ data }: NodeProps<Node<CustomNodeData>>) {
  return (
    <div
      style={{
        padding: 12,
        background: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: 180,
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <Handle type="target" position={Position.Top} />
      <div style={{ marginBottom: 8, fontWeight: 600 }}>{data.label}</div>
      <div className="nopan nodrag" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <input
          type="text"
          className="nodrag nopan"
          placeholder="Type here..."
          style={{
            padding: '6px 10px',
            border: '1px solid #ccc',
            borderRadius: 4,
            fontSize: 14,
          }}
        />
        <button
          type="button"
          className="nodrag nopan"
          onClick={() => alert('Button clicked!')}
          style={{
            padding: '6px 12px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Click me
        </button>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});

export default CustomNode;
