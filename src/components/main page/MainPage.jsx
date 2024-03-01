import './mainPage.scss';

function MainPage(){
return(
<main className="main-page">
<div className='main-page__container'>
    <div className='main-page__content'>
        <h1 className='main-page__title'>Онлайн-школа
иностранных языков</h1>
<h2 className='main-page__subtitle'>Изучайте легко. Говорите свободно</h2>
<div className='main-page__buttons'>
    <button type='button' className='btn btn__sing-up'>Войти</button>
    <button type='button' className='btn btn__registration'>Зарегестрироваться</button>
</div>
    </div>
</div>
</main>
);
};
export default MainPage;