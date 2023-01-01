export default function Section(props :{children: React.ReactNode}){
    return (
        <p className=" text-white-300">
            {props.children}
        </p>
    )
}
