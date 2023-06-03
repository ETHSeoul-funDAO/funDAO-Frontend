import { useState, useEffect, useCallback } from "react";
import {Circles} from "react-loader-spinner";

const Loading = () => {
    return(
        <div>
            <Circles
            type="Oval"
            color="#3d66ba"            
            width= {300}
            height= {300}
            timeout={3000}
            ></Circles>
        </div>
    );
}

export default Loading