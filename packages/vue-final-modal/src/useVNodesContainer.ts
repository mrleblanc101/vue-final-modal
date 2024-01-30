import type { VNode } from 'vue'
import { ref, shallowReactive } from 'vue'
import type { VNodesContainer } from './Modal'

export function useVNodesContainer(): VNodesContainer {
  const vNodes: VNode[] = shallowReactive([])
  const containers = ref<symbol[]>([])

  function push(vNode: VNode) {
    if (!vNodes.includes(vNode))
      vNodes.push(vNode)
  }

  function remove(vNode: VNode): void {
    const index = vNodes.indexOf(vNode)
    if (index !== undefined && index !== -1)
      vNodes.splice(index, 1)
  }

  const _vNodesContainer: VNodesContainer = {
    vNodes,
    containers,
    push,
    remove,
  }
  return _vNodesContainer
}
