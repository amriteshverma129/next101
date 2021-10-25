import {useRouter} from 'next/router'
const Person = () => {
    const router =useRouter()
    console.log(router.query.person)
    return ( 
        <div className="display-1 text-danger bg-primary">
            {router.query.person}'s {router.query.vehicle}
        </div>
     );
}
 
export default Person;