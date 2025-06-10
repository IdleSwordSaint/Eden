import {useState,useRef, ReactNode} from 'react';

interface WallProps {
  children: ReactNode;
}

const Wall = ({children} : WallProps) => {  /* prop destructuring*/

    const WallRef = useRef<HTMLDivElement | null>(null);

    const [isEditMode, setEditMode] = useState<boolean>(false);

    return (
        <div> {/* div for the whole wall component*/}
            <button onClick= {() => setEditMode(!isEditMode)}>       {/*div for the edit button*/}
                {isEditMode? 'Done' : "Edit"}
            </button>

            <div ref = {WallRef}>
        {children}  {/* this is where the children will be displayed */}
            </div>
        </div>
    );

};

export default Wall;