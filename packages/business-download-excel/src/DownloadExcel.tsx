import React from 'react';

interface IDownloadExcel {
  id: string;
}

const DownloadExcel = (props: IDownloadExcel) => {

  const { id } = props;

  return  <div>
    <span>下载excel</span>
    <form action="" method="post" encType="mutilpart-formdata">
      <input type="text" name="id" id="" value={id}/>
    </form>
  </div>
}


export { DownloadExcel }