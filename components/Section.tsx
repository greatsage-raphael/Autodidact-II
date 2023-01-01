export default function Section(props :{children: React.ReactNode}){
    return (
        <p className=" text-black-300">
            {props.children}
        </p>
    )
}
