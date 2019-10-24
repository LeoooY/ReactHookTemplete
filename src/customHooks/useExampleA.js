import {useContext} from 'react';
import {context} from '@context';
import * as exampleAAction from '@context/reducer/exampleA/creator';


const useExampleA = () => {
    const {egA: {dispatch: egADispatch}} = useContext(context);
    return {        
        example: (somedate) => {
            egADispatch(exampleAAction.example(somedate))
        },
    }
};

export default useExampleA;