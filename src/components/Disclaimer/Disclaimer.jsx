import { DisclaimerItem } from '../DisclaimerItem';

export function Disclaimer({ disclaimerText }) {
    // console.log(disclaimerText)

    return (
        <ul>
            {disclaimerText.map(({ text, id }) => (
                <DisclaimerItem text={text} key={id} />  
            ))}
        </ul>
    )
}
