import './CreatePopUp.css';

export function Confirmation(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close' onClick={props.close}>&times;</button>
                {props.children}
            </div>
        </div>
    ) : <div></div>;
}