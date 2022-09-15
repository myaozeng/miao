var myaozeng = {

  // 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
  chunk: function (array, size) {
    if (array.length == size) {
      return array
    }
    var result = []
    var temp = []
    for (var i = 0; i < array.length; i++) {
      temp.push(array[i])
      if (temp.length == size) {
        result.push(temp)
        temp = []
      }
    }
    result.push(temp)
    return result
  },

  // 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  // 创建一个新数组，将array与任何数组 或 值连接在一起。
  concat: function (array, values) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      result.push(array[i])
    }
    if (Array.isArray(values)) {
      for (var i = 0; i < values.length; i++) {
        result.push(values[i])
      }
    } else {
      result.push(values)
    }
    return result
  },

  // 创建一个切片数组，去除array前面的n个元素（n默认值为1）。
  drop: function (array, n = 1) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] > n) {
        result.push(array[i])
      }
    }
    return result
  },

  // 创建一个切片数组，去除array尾部的n个元素（n默认值为1）。
  dropRight: function (array, n = 1) {
    var result = []
    for (var i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result
  },

  // 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  // 减少一级array嵌套深度。
  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        for (var i = 0; i < item.length; i++) {
          result.push(item[i])
        }
      } else {
        result.push(item)
      }
    }
    return result
  },

  // 获取数组 array 的第一个元素。
  head: function (array) {
    if (array[0] == undefined) {
      return undefined
    } else {
      return array[0]
    }
  },

  // 使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    retuen - 1
  },

  // 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
  initial: function (array) {

  },

  // 将 array 中的所有元素转换为由 separator 分隔的字符串。
  join: function (array, separator) {
    var resultStr = ''
    for (var i = 0; i < array.length; i++) {
      if (i !== array.length - 1) {
        resultStr += array[i] + separator
      } else {
        resultStr += array[i]
      }
    }
    return resultStr
  },

  // 获取array中的最后一个元素。
  last: function (array) {
    if (array[array.length - 1] == undefined) {
      return undefined
    } else {
      return array[array.length - 1]
    }
  },

  // 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
  lastIndex: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },

  // 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
  nth: function (array, n) {

  },

}