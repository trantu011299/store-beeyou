import { InstagramIcon } from "../../../content/icon"
import ImageInstagram from "../../../assets/images/image-instagram.png"
import { IMAGEINSTAGRAM } from "../../../data/data"

const MainInstagram = () => {
    const refAssignCallback = (ref: any) => {
        if (ref) {
          //the containerRef is currently null, ref available = mounted.
          var element = ref;
          var scrollWidth = element.scrollWidth;
          var clientWidth = element.getBoundingClientRect().width;
    
          //explicitly set the scrollTop position of the scrollContainer
          element.scrollLeft = (scrollWidth - clientWidth) / 2;
        } 
      }; 
    return (
        <div className="main-instagram">
            <h3>
                BeeYou trên Instagram
            </h3>
            <h5>
                Follow BeeYou trên instagram để có cơ hội tham gia các chương trình ưu đãi dành riêng cho người dùng Instagram
            </h5>
            {/* <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon/> <span>instagr.am/beeyoufashion</span>
            </a> */}
            <div className="main-instagram-text"><InstagramIcon/> <a href="https://www.instagram.com/" target="_blank">instagr.am/beeyoufashion</a></div>
            <div ref={refAssignCallback} className="main-instagram-list">
                {
                    IMAGEINSTAGRAM.map(() => {
                        return <div className="image-instagram">
                            <img className="" src={ImageInstagram} alt="ImageInstagram"/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default MainInstagram