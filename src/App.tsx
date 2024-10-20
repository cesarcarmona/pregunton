/** @format */

import { ChangeEvent, useState } from 'react';
import { resultFaces, scaryFaces } from './emojiFaces.ts';

function App() {
    const [result, setResult] = useState<string>('?');
    const [maxValue, setMaxValue] = useState<number>(1);
    const [isGeneratingNumber, setIsGeneratingNumber] =
        useState<boolean>(false);
    const [scaryFace, setScaryFace] = useState<string>('😶');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setResult(value);
    };

    const handleMaxValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value || '0';
        setMaxValue(parseInt(value));
    };

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * maxValue) + 1;
    };

    const getRandomFace = (facesArray: string[]): string => {
        const randomIndex = Math.floor(Math.random() * facesArray.length);
        return facesArray[randomIndex];
    };

    const playGame = () => {
        if (isGeneratingNumber) {
            return;
        }
        setIsGeneratingNumber(true);
        setScaryFace(getRandomFace(scaryFaces));
        const interval = setInterval(() => {
            setResult(generateRandomNumber().toString());
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            const finalNumber = generateRandomNumber();
            setResult(finalNumber.toString());
            setIsGeneratingNumber(false);
            setScaryFace(getRandomFace(resultFaces));
        }, 5000);
    };

    return (
        <div
            className={
                'flex flex-wrap items-center justify-center h-screen w-full bg-gradient-to-r from-red-500 to-orange-500'
            }
        >
            <section className='relative bg-white rounded-lg shadow-xl shadow-orange-800 px-0 max-w-3xl pb-12 pt-0 flex flex-wrap items-start justify-center space-y-9'>
                <input
                    className={`absolute bg-gray-700 -top-16 -right-12 outline-none focus:outline-none rounded-full h-32 w-40 text-8xl font-semibold flex items-center justify-center text-center text-white `}
                    type='text'
                    id='result'
                    value={result}
                    onChange={handleInputChange}
                />
                <h1
                    className={`flex w-full justify-center items-center text-gray-800 font-semibold text-5xl border-b-2 py-2`}
                >
                    <span className={'text-3xl mx-2'}>🎉</span>
                    Pregunt&oacute;n
                    <span className={'text-3xl mx-2'}>🎉</span>
                </h1>
                <div
                    className={
                        'flex flex-wrap w-full items-center justify-center'
                    }
                >
                    <div className='flex flex-wrap w-full justify-center'>
                        <label
                            className={`text-gray-800 text-3xl font-semibold mb-5`}
                            htmlFor='maxValue'
                        >
                            Participantes
                        </label>
                    </div>
                    <div className='flex flex-wrap w-full justify-center mb-10'>
                        <input
                            className={`bg-gray-200 outline-none focus:outline-none rounded-md h-20 w-32 text-6xl font-semibold flex items-center justify-center text-center text-gray-700`}
                            type='text'
                            id='maxValue'
                            name={'maxValue'}
                            value={maxValue}
                            onChange={handleMaxValueInputChange}
                        />
                    </div>
                    <div
                        className={
                            'flex flex-wrap w-full mb-16 justify-center items-center'
                        }
                    >
                        <button
                            className={`${
                                isGeneratingNumber
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : `bg-gradient-to-r from-blue-800 to-indigo-900 hover:from-blue-600 hover:to-indigo-700 text-white hover:shadow-xl`
                            } px-8 py-5 text-2xl rounded-full  tracking-wide`}
                            type={'button'}
                            onClick={playGame}
                            disabled={isGeneratingNumber}
                            id='button'
                        >
                            Pr&oacute;xima v&iacute;stima
                        </button>
                    </div>
                    <div className='flex justify-center items-center absolute -bottom-16 rounded-full text-9xl w-40 h-40 bg-transparent'>
                        {scaryFace}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
