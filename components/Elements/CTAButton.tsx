interface ButtonProps{
    className?:string
    showIcon?:Boolean
    width?:string
    CTA?:string
      }

const CTAButton:React.FC<ButtonProps>  = ({className, width='172px', CTA='Register'}) => {

 
  return (
    <button className={`w-[172px] h-[53px] flex items-center justify-center bg-button rounded-[4px] ${className}`}>
    {CTA}
   </button>
  )
}

export default CTAButton