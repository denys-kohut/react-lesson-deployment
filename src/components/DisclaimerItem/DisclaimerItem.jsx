import { useState } from 'react';
import { Button } from '../Button';

export function DisclaimerItem({text, id}) {
    const [isRepeatedState, setIsRepeatedState] = useState({times: 1, repeated: false });
    const includeRepeat = () => {
        setIsRepeatedState({...isRepeatedState, repeated: true })
    }

    const increaseRepeat = () => {
        setIsRepeatedState({...isRepeatedState, times: isRepeatedState.times + 1 })
    }

    return (
        <li>
            {
                isRepeatedState.repeated
                    ? <Button onClick={increaseRepeat}>Repeat</Button>
                    : <Button onClick={includeRepeat}>Include repeat</Button>
            }
            {text.repeat(isRepeatedState.times)}
        </li>
    )
}
