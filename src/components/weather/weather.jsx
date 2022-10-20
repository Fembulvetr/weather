import s from './weather.module.css';

const Weather = (props) => {
    return (
        <div className={s.weather}>
            <div className={s.weatherItems}>
                <div className={s.weatherBlock}>City: {props.city}</div>
                <div className={s.weatherBlock}>Country: {props.country}</div>
            </div>
            <div className={s.weatherItems}>
                <div className={s.weatherBlock}>Temperature: {props.temp}°</div>
                <div className={s.weatherBlock}>Sunset: {props.sunset}</div>
            </div>

        </div>
    );
}

export default Weather;