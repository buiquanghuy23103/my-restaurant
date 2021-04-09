import React from 'react'

type Props = {
    errorMessage: string
}

export default function ErrorText({ errorMessage }: Props) {
    return (
        <div className="container" data-test="component-error-text">
            <div className="row">
                <h4 data-test="error-message">{ errorMessage }</h4>
            </div>
        </div>
    )
}
