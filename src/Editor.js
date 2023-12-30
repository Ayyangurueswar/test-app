import {React, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const Editor = () => {
  const editValue = (message) => ({
    type: 'EDIT',
    value: message
  })
  const dispatch = useDispatch();
  useEffect(() => {
    const path = require('./sample.md');
    fetch(path).then((response) => response.text()).then((text) => {
        dispatch(editValue(text));
    })
  }, []);
  const content = useSelector((state) => state.content);
  const editorAlone = useSelector((state) => state.editorAlone);
  const previewerAlone = useSelector((state) => state.previewerAlone);
  const editorOnly = () => ({
    type: 'EDITOR_ONLY'
  })
  return (
    <div className={editorAlone ? 'editor-wrap fullScreen' : previewerAlone ? 'd-none' : 'editor-wrap'}>
        <div className='editor'>
          <div className='editor-header'>
            <div className='header-content'>
              <span><FontAwesomeIcon icon={faFreeCodeCamp}/> Editor</span>
            </div>
            <FontAwesomeIcon icon={faArrowsAlt} rotation={90} onClick={() => {dispatch(editorOnly())}}
            className='expand'/>
          </div>
          <textarea className='editor-content' 
          onChange={(e) => {dispatch(editValue(e.target.value))}}
          value={content}>
          </textarea>
        </div>
    </div>
  )
}

export default Editor
