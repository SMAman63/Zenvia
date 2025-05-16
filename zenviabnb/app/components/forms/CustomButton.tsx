interface CustomButtonProps{
    label:string;
    className?:string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps>=({
    label,
    className,
    onClick
})  =>{
    return(
        <div
            onClick={onClick}
            className={` ${className} w-100px py-4 bg-rose-500 hover:bg-rose-800 text-white text-center rounded-xl transition cursor-pointer `}
            >
            {label}
        </div>

    )
}

export default CustomButton;