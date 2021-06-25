import { connect } from "react-redux"
import './ErrorComponent.css';

function ErrorComponent({breedListError, dogPhotosError}) {
  return (<div className="errorComponent">
    {
      breedListError && (
        <div>
        <p>{breedListError.code}</p>
        <p>{breedListError?.message}</p>
        </div>
      )
    }
    {
      dogPhotosError && (
        <div>
        <p>{dogPhotosError.code}</p>
        <p>{dogPhotosError?.message}</p>
        </div>
      )
    }
  </div>)
}

const mapStateToProps = (store) => {
  return {
    breedListError: store.breedListReducer.error,
    dogPhotosError: store.dogPhotosReducer.error
  }
}

export default connect(mapStateToProps)(ErrorComponent)