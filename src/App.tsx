import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Chatbot } from "@/components/Chatbot";
import Index from "./pages/Index";
import PublicCatalog from "./pages/PublicCatalog";
import PublicReportDetail from "./pages/PublicReportDetail";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminProjectNew from "./pages/AdminProjectNew";
import AdminProjectEdit from "./pages/AdminProjectEdit";
import AdminProjectDetail from "./pages/AdminProjectDetail";
import ReportsTable from "./pages/ReportsTable";
import ReportDetail from "./pages/ReportDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import VendorDashboard from "./pages/VendorDashboard";
import VendorReports from "./pages/VendorReports";
import VendorReportForm from "./pages/VendorReportForm";
import VendorReportDetail from "./pages/VendorReportDetail";
import PublicApiInfo from "./pages/PublicApiInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Chatbot />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/public" element={<PublicCatalog />} />
          <Route path="/public/catalog" element={<PublicCatalog />} />
          <Route path="/public/api-info" element={<PublicApiInfo />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/project/new" element={<AdminProjectNew />} />
          <Route path="/admin/project/:id/edit" element={<AdminProjectEdit />} />
          <Route path="/admin/project/:id" element={<AdminProjectDetail />} />
          <Route path="/admin/reports" element={<ReportsTable />} />
          <Route path="/admin/report/:id" element={<ReportDetail />} />
          <Route path="/public/report/:id" element={<PublicReportDetail />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/vendor/reports" element={<VendorReports />} />
          <Route path="/vendor/report/new" element={<VendorReportForm />} />
          <Route path="/vendor/report/:id/edit" element={<VendorReportForm />} />
          <Route path="/vendor/report/:id" element={<VendorReportDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
