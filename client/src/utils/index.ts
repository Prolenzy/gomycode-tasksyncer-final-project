export const formatDate = (date: Date): string => {
    // Get the month, day, and year
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
  
    const formattedDate = `${day}-${month}-${year}`;
  
    return formattedDate;
  };
  
  export function dateFormatter(dateString: string): string {
    const inputDate = new Date(dateString);
  
    if (isNaN(inputDate.getTime())) {
      return "Invalid Date";
    }
  
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  
  export function getInitials(fullName: string): string {
    const names = fullName.split(" ");
  
    const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());
  
    const initialsStr = initials.join("");
  
    return initialsStr;
  }
  
  export const PRIOTITYSTYELS: Record<string, string> = {
    high: "text-red-600",
    medium: "text-yellow-600",
    low: "text-blue-600",
  };
  
  export const TASK_TYPE: Record<string, string> = {
    todo: "bg-blue-600",
    "in progress": "bg-yellow-600",
    completed: "bg-green-600",
  };
  
  export const BGS: string[] = [
    "bg-blue-600",
    "bg-yellow-600",
    "bg-red-600",
    "bg-green-600",
  ];
  