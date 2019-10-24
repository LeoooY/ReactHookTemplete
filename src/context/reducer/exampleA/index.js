import * as actionTypes from './types';

export const exampleAInitVal = {
    isShow:false,
    nodeId:''
};

export default (egA, action) => {
    switch (action.type) {        
        case actionTypes.EXAMPLE: 
            // hook 中的 useEffect 使用 Object.is()来判断state是否更新，
            // 所以用深/浅拷贝来使得UI更新渲染
            egA=Object.assign({},egA)
            return egA        
        default:
            return panel;
    }
};