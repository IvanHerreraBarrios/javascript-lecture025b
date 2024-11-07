var groupThePeople = function(groupSizes) {
    const map = new Map()
    for(let i=0; i < groupSizes.length; i++){
        const size = groupSizes[i]
        if(map.has(size)){
            const groups = map.get(size)
            const group = groups[groups.length - 1]
            if(group.length < size){
                group.push(i)
            } else {
                groups.push([i])
            }
        } else {
            map.set(size, [[i]])
        }
    }

    const result = []
    for([size, groups] of map){
        for(group of groups){
            result.push(group)
        }
    }
    return result
};