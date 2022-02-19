// NOTE: nextのimage関連にIssueがたっててimgのimportがうまく動かなくなってるのでこちらで上書きします。
// Issueが解決したら削除・変更してください
// https://github.com/vercel/next.js/issues/29788
declare module '*.png' {
  const content: string;

  export default content;
}
