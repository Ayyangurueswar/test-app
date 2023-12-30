import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import { useDispatch, useSelector } from 'react-redux';

const Previewer = () => {
  const content = useSelector((state) => state.content);
  const previewerAlone = useSelector((state) => state.previewerAlone);
  const editorAlone = useSelector((state) => state.editorAlone);
  const dispatch = useDispatch();
  marked.use({
    gfm: true,
  });
  const htmlContent = marked.parse(content);
  const previewerOnly = () => ({
    type: 'PREVIEWER_ONLY'
  });
  return (
    <div className={previewerAlone ? 'previewer-wrap fullScreen' : editorAlone ? 'd-none' : 'previewer-wrap'}>
      <div className='previewer'>
          <div className='editor-header'>
            <div className='header-content'>
              <span><FontAwesomeIcon icon={faFreeCodeCamp} /> Previewer</span>
            </div>
            <FontAwesomeIcon icon={faArrowsAlt} className='expand' onClick={() => {dispatch(previewerOnly())}}/>
          </div>
          <div dangerouslySetInnerHTML={{__html: htmlContent}} className='previewer-content'>
          </div>
      </div>
    </div>
  )
}

export default Previewer
