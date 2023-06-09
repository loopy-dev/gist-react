import React from 'react';

interface Props {
  gistId: string;
  file?: string;
}

const Gist = ({ gistId, file }: Props) => {
  const ref = React.useRef<HTMLIFrameElement>(null);
  const idBase = `gist-${gistId}`;
  const iframeId = file ? idBase.concat(`-${file}`) : idBase;
  const src = `https://gist.github.com/${gistId}.js`;
  const url = file ? src.concat(`?file=${file}`) : src;

  React.useEffect(() => {
    if (!ref.current) return;

    const $iframe = ref.current;

    $iframe.srcdoc = `
      <style>
        *{box-sizing: border-box; overflow-y: hidden;}
      </style>
      <base target="_blank">
      <script src="${url}"></script>`;
  }, [url]);

  return (
    <iframe
      ref={ref}
      onLoad={() => {
        if (!ref.current) return;
        const $iframe = ref.current;
        const innerHeight = $iframe.contentDocument?.body.scrollHeight;
        $iframe.style.height = String(innerHeight) + 'px';
      }}
      style={{ border: 0, width: '100%' }}
      id={iframeId}
    />
  );
};

export default Gist;
