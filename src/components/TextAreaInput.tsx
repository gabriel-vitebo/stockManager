import { useEffect, useRef } from 'react';

interface TextAreaInputProps {
    placeholder?: string;
    readonly: boolean;
}

export function TextAreaInput({ placeholder, readonly }: TextAreaInputProps): JSX.Element {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const textArea = textAreaRef.current;
        if (textArea && readonly) {
            textArea.style.height = 'auto';
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    }, [placeholder, readonly]);


    return (
        <div className='w-full max-w-screen-sm flex items-center rounded-lg'>
            <textarea
                ref={textAreaRef}
                placeholder={placeholder}
                readOnly={readonly}
                className='flex-1 border-none outline-none py-2 pl-3 placeholder:text-primaryBgDark bg-colorDefaultDark rounded-lg max-h-96 min-h-36 resize-none'
                style={{ height: readonly ? 'auto' : 'min-h-36' }}
            />
        </div>
    );
}
