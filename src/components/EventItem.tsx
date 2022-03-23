import {ChangeEvent, MouseEvent, DragEvent, useState, useRef} from "react";


const EventItem = () => {
    const [value, setValue] = useState('');
    const [text, setText] = useState('');
    const [isDrag, setIsDrag] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const addhandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const overHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        setIsDrag(false);
        console.log('DROP')
    }

    return (
        <div>
            <input type="text" placeholder='uncontrolled' ref={inputRef}/>
            <input type="text" value={value} onChange={changeHandler} placeholder='controlled'/>
            <button onClick={addhandler}>Add</button>
            {text}

            <div style={{width: '200px', height: '200px', background: 'tomato'}} draggable onDrag={dragHandler}/>
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    background: isDrag ? 'skyblue' : 'tomato',
                    marginTop: '15px'
                }}
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={overHandler}
            />
        </div>
    );
};

export default EventItem;