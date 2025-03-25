function HeartIconBtn({onClick, isFavorate = false}) {

  // function handleFavorite() {
  //   alert(isFavorate ? '종아요' : '모르겠어요');
  // }

  return (
    <div className="course__icons">
      {/* <button className="btn" onClick={onClick}> */}
      {/*e : eventHandler*/}
      <button className="btn" onClick={(e) => onClick(e)}>
        <img className="btn__img" src={isFavorate ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}/>
      </button>
    </div>
  )
}

function LinkIconBtn({link}) {
  return (
      <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt=""/>
    </a>
    )
}

export default function CourseItem({title, description, thumbnail, isFavorate, link}) {
  const isEmpty = false;
  if(isEmpty) {
    return <p>강의가 없습니다</p>
  }

  //관습적으로 이벤트 핸들러 함수는 handle~로 시작하고 props는 on~으로 시작하도록 정의한다
  function handleFavorite(e) {
    //이벤트 전파를 막음
    e.stopPropagation();
    alert(isFavorate ? '종아요' : '모르겠어요');
  }

  function handleItemClick() {
    alert('item click~!');
    window.open(link, '_blank');
  }
  
  return (
    // <article className="course">
    //   <img className="course__img" src="./img/htmlcss.png" alt="" />
    //   <div className="course__body">
    //     <div className="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
    //     <div className="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
    //   </div>
    // </article>
    <article className="cource" onClick={handleItemClick}>
    <img className="course__img" src={thumbnail} alt=""/>
    <div className="course__title">{title}</div>
    <div className="course__description">{description} </div>
    <HeartIconBtn isFavorate={isFavorate} onClick={handleFavorite}/>
    {link && <LinkIconBtn link={link}/>}
  </article>
  );
}