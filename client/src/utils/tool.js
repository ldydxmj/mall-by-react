class tool {
    //比较两个数据是否相等
    checkIfEual(objA, objB) {
        const isType = obj => Object.prototype.toString.call(obj).slice(8, -1)
        //构造函数不同
        if (isType(objA) !== isType(objB)) {
            return false
        }
        //引用类型
        if (typeof objA === 'object') {
            if (isType(objA) === 'Object') {
                const objAValArr = Object.values(objA)
                const objBValArr = Object.values(objB)
                if (objAValArr.length !== objBValArr.length) {
                    return false
                }
                return Object.keys(objA).every(item => {
                    if (typeof objA[item] === 'object') {
                        this.checkIfEual(objA[item], objB[item])
                    } else {
                        return objA[item] === objB[item]
                    }
                })
            }
            if (isType(objA) === 'Array') {
                const lenA = objA.length
                const lenB = objB.length
                if (lenA !== lenB) {
                    return false
                }
                for (let i = 0; i < lenA; i++) {
                    if (typeof objA[i] === 'object') {
                        return this.checkIfEual(objA[i], objB[i])
                    }
                    if (objA[i] !== objB[i]) {
                        return false
                    }
                }
                //所有下标值都相同
                return true
            }
        } else {
            //基本类型直接比较数值
            return objA === objB
        }
    }
    //节流
    throttle(fn, delay) {
        let endTime, deferTimer
        return function (args) {
            let startTime = +new Date()
            if (endTime && Math.abs(+new Date() - startTime) < delay) {
                clearTimeout(deferTimer)
                deferTimer = setTimeout(() => {
                    endTime = +new Date()
                    fn.apply(this, args)
                }, delay)
            } else {
                endTime = +new Date()
                fn.apply(this, args)

            }
        }
    }
}
//输出单例
let toolSingleton = (function () {
    let _tool
    return function () {
        if (!_tool) {
            _tool = new tool()
        }
        return _tool
    }
})()()
export default toolSingleton