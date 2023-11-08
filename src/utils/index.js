export const columnsGenerator = (columns) => {
  let fractionsGenerates = "1fr";
  for (let i = 1; i < columns; i++) fractionsGenerates += " 1fr";
  return fractionsGenerates;
};

export const isActiveTab = (currentTab, activeTab) =>
  currentTab === activeTab ? "active" : "";
