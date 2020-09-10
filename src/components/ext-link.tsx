// 外部リンク用
export default props => (
  <a {...props} rel="noopener" target={props.target || '_blank'} />
)
// 補足
// rel="noopener" は外部リンクのセキュリティ向上のためにつけるもの
