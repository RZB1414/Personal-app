import { ProgressBar } from "react-bootstrap";
import './ProgressBarComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgressBarComponent = ({ now, min, max, type }) => {

    const percentage = ((now - min) / (max - min)) * 100;
    const label = `${percentage.toFixed(2)}%`;

    return (
        <div className="prgbar">
            <p>{type}</p>
            <ProgressBar
                variant={percentage < 30 ? 'danger' : percentage < 60 ? 'warning' : 'success'}
                now={now}
                label={label}
                min={min}
                max={max}
                style={{ height: '20px', fontSize: '14px', borderRadius: '30px' }}
            />
        </div>
    )
}

export default ProgressBarComponent