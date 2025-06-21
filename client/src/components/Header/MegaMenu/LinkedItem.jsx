

const LinkedItem = ({url,label}) => {
  return (
    <a href={url} className="text-sm text-slate-700 transition-all hover:text-slate-900 hover:underline">
        {label}
    </a>
  )
}

export default LinkedItem;