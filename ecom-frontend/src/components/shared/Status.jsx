const Status = ({text, icon:IconBase, bg, color}) =>{
    return (
        <div className={`${bg} ${color} px-2 py-2 font-medium rounded flex items-center gap-1`}>
            {text} <icon size={15}/>
        </div>
    )
}

export default Status;