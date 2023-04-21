


export const formatDate=(dateString)=>{
  const date=new Date(dateString).toLocaleDateString('en-US',{
    weekday:'short',
    year:'numeric',
    month:'short',
    day:'numeric'
  })

  return date
}