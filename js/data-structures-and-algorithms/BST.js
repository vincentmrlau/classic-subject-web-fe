/*
* ------------------------------------------
* @description
* binary Search Tree
* ------------------------------------------
* @version 1.0.0
* @createdAt 
* @author vincent lau/413893093@qq.com
*/

/*
* 节点类
* */
class Node {
  constructor (data,
               count = 1,
               left = null,
               right = null)
  {
    // 数值
    this.data = data
    // 出现次数
    this.count = count
    // 左右节点指向
    this.left = left
    this.right = right
  }
  show () {
    return {
      data: this.data,
      count: this.count
    }
  }
}

/**
 * 二叉搜索树类
 */
class BST {
  constructor () {
    // 初始化跟节点为null
    this.root = null
  }
  
  /**
   * 插入数据
   * @param data
   */
  insert (data) {
    let n = new Node(data, 1)
    if (this.root === null) {
      // 没有根节点，新的树把待插入的值作为根节点
      this.root = n
    } else {
      // 有根节点，遍历树直到找到合适的位置
      let current = this.root
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = n
            break
          }
          current = current.left
        } else if (data === current.data) {
          current.count += 1
          break
        } else {
          if (current.right === null) {
            current.right = n
            break
          }
          current = current.right
        }
      }
    }
  }
  
  /**
   * 中序遍历
   * @param node
   */
  inOrder (node) {
    if (node !== null) {
      this.inOrder(node.left)
      console.log(`data:${node.data},count:${node.count}`)
      this.inOrder(node.right)
    }
  }
  
  /**
   * 先序遍历
   * @param node
   */
  preOrder (node) {
    if (node !== null) {
      console.log(`data:${node.data},count:${node.count}`)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  
  /**
   * 后序遍历
   * @param node
   */
  postOrder (node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(`data:${node.data},count:${node.count}`)
    }
  }
  
  /**
   * 查找最小值
   * @returns {CanvasPixelArray|string|Object[]|*}
   */
  getMin (node) {
    let current = node || this.root
    while (current.left !== null) {
      current = current.left
    }
    return current
  }
  
  /**
   * 查找最大值
   * @returns {CanvasPixelArray|string|Object[]|*}
   */
  getMax (node) {
    let current = node || this.root
    while (current.right !== null) {
      current = current.right
    }
    return current
  }
  
  /**
   * 查找数据
   * @param data
   * @returns {*}
   */
  find (data) {
    let current = this.root,
      result = null
    while (current !== null) {
      if (data === current.data) {
        result = current
        break
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return result
  }
  
  /**
   * 删除数据
   * @param data
   */
  remove ( data ) {
    this.root = this.removeDataFromNode(this.root, data)
  }
  
  /**
   * 从指定节点中删除数据
   * @param node
   * @param data
   * @returns {*}
   */
  removeDataFromNode (node, data) {
    if (node !== null) {
      if (data === node.data) {
        if (node.left === null && node.right === null) {
        //  没有子节点
          return null
        }
        if (node.right === null) {
        //  只有左节点
          return node.left
        }
        if (node.left === null) {
        //  只有右节点
          return node.right
        }
        // 有做节点和右节点
        // 取右节点的最小值
        let tempNode = this.getMin(node.right)
        node.data = tempNode.data
        node.count = tempNode.count
        node.right = this.removeDataFromNode(node.right, tempNode.data)
        return node
      } else if (data < node.data) {
        node.left = this.removeDataFromNode(node.left, data)
        return node
      } else {
        node.right = this.removeDataFromNode(node.right, data)
        return node
      }
    } else {
      return null
    }
  }

}

let testData = [43,34,67,23,34,45,2,78,34,28]
// 43,34,67,23,45,2,78,28

let bst = new BST()
console.log(JSON.stringify(bst))

for (let data of testData) {
  bst.insert(data)
}
console.log(JSON.stringify(bst))

console.log('中序')
bst.inOrder(bst.root)
console.log('先序')
bst.preOrder(bst.root)
console.log('后序')
bst.postOrder(bst.root)

bst.remove(45)
console.log(JSON.stringify(bst))
bst.remove(67)
console.log(JSON.stringify(bst))

