type Props = {
    title: string;
  };


export default function Section({children} : React.PropsWithChildren<Props>){
    return (
        <p className=" text-white-300">
            {children}
        </p>
    )
}