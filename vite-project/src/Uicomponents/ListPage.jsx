export default function ListPage(props) {
    console.log("props",props)
    return (
      <div className="post" role="listitem">
        <h2 className="post__title">
        <a target="_blank" rel="noopener">
           {props.title}
          </a>
          {/* {url ? (
         e}
            </a>
        //   ) : (
        //     title
        //   )} */}
        </h2>
        {/* <p className="post__metadata">
          By {by} &middot; {new Date(time * 1000).toLocaleString()}
        </p> */}
      </div>
    );
  }
  