import './loading.css';

export default function Loading() {
    return (
        <div className='loadingContainer'>
            <img className='loadingImg' src='./loading.gif' alt="" />
            <h1 className='loadingTitle'>Cargando...</h1>
        </div>
    )
}