import React, {memo} from "react";
import styled from "styled-components";

const LoaderContainer = styled.div``;


const Loader = () => {
  return <LoaderContainer className="lds-dual-ring" />;
};


export default memo(Loader);

