import { Fragment } from "react";
import { connect } from "react-redux";
import './pictures.css';

function Pictures({dogPhotos}) {

  return (
    <Fragment>
      {
        dogPhotos?.map((img, i) => {
          return <img key={i} src={img} />
        })
      }
    </Fragment>
  )
}

const mapStateToProps = (store) => {
  return { 
    dogPhotos: store.dogPhotosReducer.dogPhotos,
    
  }
}

export default connect(mapStateToProps)(Pictures);