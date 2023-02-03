import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {useDispatch, useSelector} from "react-redux";
import {selectDetailsCountry} from "../store/details/detailsSelector";
import {useEffect} from "react";
import {clearDetails, loadDetails} from "../store/details/detailsAction";


export const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const navigate = useNavigate();

  const {currentCountry, status} = useSelector(selectDetailsCountry);

  useEffect(() => {
      dispatch(loadDetails(name))
      return () => {
          dispatch(clearDetails())
      }
  },[name, dispatch])
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
        {status === 'loading' && <h2>loading...</h2>}
        {status === 'rejected' && <h2>failed to fetch</h2>}
        {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
