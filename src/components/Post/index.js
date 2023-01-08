const Post = () =>{
    return(
        <div className="post mx-2">
            <div className="img-post"></div>
            <h5>Tecnologia</h5>
            <h3>O guia definitivo do block</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper lorem vitae maximus volutpat. Sed nibh diam, porta a finibus vitae, laoreet consectetur lectus. Suspendisse et odio vitae turpis aliquet tincidunt.</p>
            <div className="flex pt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-2">
                    <h6 className="color-blue">Fulano de tal</h6>
                    <p>Aug 2, 2020 - 8 min read</p>
                </div>
            </div>
        </div>
    )
}

export default Post;