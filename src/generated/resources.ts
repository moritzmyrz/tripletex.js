import { BaseClient } from '../base';
import type { ApiResult } from '../types';
import { OPERATION_DEFINITIONS } from './operations';
import type {
  AccountantDashboardNews_getArgs,
  AccountantDashboardNews_getResponse,
  AccountantDashboardNewsTags_getTagsArgs,
  AccountantDashboardNewsTags_getTagsResponse,
  AccountingOfficeReconciliationsControl_getArgs,
  AccountingOfficeReconciliationsControl_getResponse,
  AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationArgs,
  AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationResponse,
  AccountingOfficeReconciliationsControlReconcile_reconcileArgs,
  AccountingOfficeReconciliationsControlReconcile_reconcileResponse,
  AccountingOfficeReconciliationsControlRequestControl_requestControlArgs,
  AccountingOfficeReconciliationsControlRequestControl_requestControlResponse,
  Activity_getArgs,
  Activity_getResponse,
  Activity_postArgs,
  Activity_postResponse,
  Activity_searchArgs,
  Activity_searchResponse,
  ActivityForTimeSheet_getForTimeSheetArgs,
  ActivityForTimeSheet_getForTimeSheetResponse,
  ActivityList_postListArgs,
  ActivityList_postListResponse,
  Asset_deleteArgs,
  Asset_deleteResponse,
  Asset_getArgs,
  Asset_getResponse,
  Asset_postArgs,
  Asset_postResponse,
  Asset_putArgs,
  Asset_putResponse,
  Asset_searchArgs,
  Asset_searchResponse,
  AssetAssetsExist_getAssetsExistArgs,
  AssetAssetsExist_getAssetsExistResponse,
  AssetBalanceAccountsSum_balanceAccountsSumArgs,
  AssetBalanceAccountsSum_balanceAccountsSumResponse,
  AssetCanDelete_canDeleteArgs,
  AssetCanDelete_canDeleteResponse,
  AssetDeleteImport_deleteImportArgs,
  AssetDeleteImport_deleteImportResponse,
  AssetDeleteStartingBalance_deleteStartingBalanceArgs,
  AssetDeleteStartingBalance_deleteStartingBalanceResponse,
  AssetDuplicate_postDuplicateArgs,
  AssetDuplicate_postDuplicateResponse,
  AssetList_postListArgs,
  AssetList_postListResponse,
  AssetPostings_getPostingsArgs,
  AssetPostings_getPostingsResponse,
  AssetUpload_uploadArgs,
  AssetUpload_uploadResponse,
  AttestationAddApprover_addApproverArgs,
  AttestationAddApprover_addApproverResponse,
  AttestationAddApproverPermission_addApproverPermissionArgs,
  AttestationAddApproverPermission_addApproverPermissionResponse,
  AttestationCompanyModules_getArgs,
  AttestationCompanyModules_getResponse,
  BalanceReconciliationAccountVouchers_getVouchersArgs,
  BalanceReconciliationAccountVouchers_getVouchersResponse,
  BalanceReconciliationAnnualContext_postAnnualContextArgs,
  BalanceReconciliationAnnualContext_postAnnualContextResponse,
  BalanceReconciliationAttachmentPdf_getAttachmentArgs,
  BalanceReconciliationAttachmentPdf_getAttachmentResponse,
  BalanceSheet_searchArgs,
  BalanceSheet_searchResponse,
  Bank_getArgs,
  Bank_getResponse,
  Bank_searchArgs,
  Bank_searchResponse,
  BankReconciliation_deleteArgs,
  BankReconciliation_deleteResponse,
  BankReconciliation_getArgs,
  BankReconciliation_getResponse,
  BankReconciliation_postArgs,
  BankReconciliation_postResponse,
  BankReconciliation_putArgs,
  BankReconciliation_putResponse,
  BankReconciliation_searchArgs,
  BankReconciliation_searchResponse,
  BankReconciliationAdjustment_adjustmentArgs,
  BankReconciliationAdjustment_adjustmentResponse,
  BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsArgs,
  BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsResponse,
  BankReconciliationLast_lastArgs,
  BankReconciliationLast_lastResponse,
  BankReconciliationLastClosed_lastClosedArgs,
  BankReconciliationLastClosed_lastClosedResponse,
  BankReconciliationMatch_deleteArgs,
  BankReconciliationMatch_deleteResponse,
  BankReconciliationMatch_getArgs,
  BankReconciliationMatch_getResponse,
  BankReconciliationMatch_postArgs,
  BankReconciliationMatch_postResponse,
  BankReconciliationMatch_putArgs,
  BankReconciliationMatch_putResponse,
  BankReconciliationMatch_searchArgs,
  BankReconciliationMatch_searchResponse,
  BankReconciliationMatchCount_countArgs,
  BankReconciliationMatchCount_countResponse,
  BankReconciliationMatchesCounter_getArgs,
  BankReconciliationMatchesCounter_getResponse,
  BankReconciliationMatchesCounter_postArgs,
  BankReconciliationMatchesCounter_postResponse,
  BankReconciliationMatchQuery_queryArgs,
  BankReconciliationMatchQuery_queryResponse,
  BankReconciliationMatchSuggest_suggestArgs,
  BankReconciliationMatchSuggest_suggestResponse,
  BankReconciliationPaymentType_getArgs,
  BankReconciliationPaymentType_getResponse,
  BankReconciliationPaymentType_searchArgs,
  BankReconciliationPaymentType_searchResponse,
  BankReconciliationSettings_getArgs,
  BankReconciliationSettings_getResponse,
  BankReconciliationSettings_postArgs,
  BankReconciliationSettings_postResponse,
  BankReconciliationSettings_putArgs,
  BankReconciliationSettings_putResponse,
  BankReconciliationTransactionsUnmatchedcsv_csvTransactionsArgs,
  BankReconciliationTransactionsUnmatchedcsv_csvTransactionsResponse,
  BankStatement_deleteArgs,
  BankStatement_deleteResponse,
  BankStatement_getArgs,
  BankStatement_getResponse,
  BankStatement_searchArgs,
  BankStatement_searchResponse,
  BankStatementImport_importBankStatementArgs,
  BankStatementImport_importBankStatementResponse,
  BankStatementTransaction_getArgs,
  BankStatementTransaction_getResponse,
  BankStatementTransaction_searchArgs,
  BankStatementTransaction_searchResponse,
  BankStatementTransactionDetails_getDetailsArgs,
  BankStatementTransactionDetails_getDetailsResponse,
  Company_getArgs,
  Company_getResponse,
  Company_putArgs,
  Company_putResponse,
  CompanyDivisions_getDivisionsArgs,
  CompanyDivisions_getDivisionsResponse,
  CompanySalesmodules_getArgs,
  CompanySalesmodules_getResponse,
  CompanySalesmodules_postArgs,
  CompanySalesmodules_postResponse,
  CompanySettingsAltinn_putArgs,
  CompanySettingsAltinn_putResponse,
  CompanySettingsAltinn_searchArgs,
  CompanySettingsAltinn_searchResponse,
  CompanyWithLoginAccess_getWithLoginAccessArgs,
  CompanyWithLoginAccess_getWithLoginAccessResponse,
  Contact_getArgs,
  Contact_getResponse,
  Contact_postArgs,
  Contact_postResponse,
  Contact_putArgs,
  Contact_putResponse,
  Contact_searchArgs,
  Contact_searchResponse,
  ContactList_deleteByIdsArgs,
  ContactList_deleteByIdsResponse,
  ContactList_postListArgs,
  ContactList_postListResponse,
  Country_getArgs,
  Country_getResponse,
  Country_searchArgs,
  Country_searchResponse,
  CrmProspect_getArgs,
  CrmProspect_getResponse,
  CrmProspect_searchArgs,
  CrmProspect_searchResponse,
  Currency_getArgs,
  Currency_getResponse,
  Currency_searchArgs,
  Currency_searchResponse,
  CurrencyExchangeRate_convertCurrencyAmountArgs,
  CurrencyExchangeRate_convertCurrencyAmountResponse,
  CurrencyExchangeRate_getAmountCurrencyArgs,
  CurrencyExchangeRate_getAmountCurrencyResponse,
  CurrencyRate_getRateArgs,
  CurrencyRate_getRateResponse,
  Customer_deleteArgs,
  Customer_deleteResponse,
  Customer_getArgs,
  Customer_getResponse,
  Customer_postArgs,
  Customer_postResponse,
  Customer_putArgs,
  Customer_putResponse,
  Customer_searchArgs,
  Customer_searchResponse,
  CustomerCategory_getArgs,
  CustomerCategory_getResponse,
  CustomerCategory_postArgs,
  CustomerCategory_postResponse,
  CustomerCategory_putArgs,
  CustomerCategory_putResponse,
  CustomerCategory_searchArgs,
  CustomerCategory_searchResponse,
  CustomerList_postListArgs,
  CustomerList_postListResponse,
  CustomerList_putListArgs,
  CustomerList_putListResponse,
  DeliveryAddress_getArgs,
  DeliveryAddress_getResponse,
  DeliveryAddress_putArgs,
  DeliveryAddress_putResponse,
  DeliveryAddress_searchArgs,
  DeliveryAddress_searchResponse,
  Department_deleteArgs,
  Department_deleteResponse,
  Department_getArgs,
  Department_getResponse,
  Department_postArgs,
  Department_postResponse,
  Department_putArgs,
  Department_putResponse,
  Department_searchArgs,
  Department_searchResponse,
  DepartmentList_postListArgs,
  DepartmentList_postListResponse,
  DepartmentList_putListArgs,
  DepartmentList_putListResponse,
  DepartmentQuery_queryArgs,
  DepartmentQuery_queryResponse,
  Division_postArgs,
  Division_postResponse,
  Division_putArgs,
  Division_putResponse,
  Division_searchArgs,
  Division_searchResponse,
  DivisionList_postListArgs,
  DivisionList_postListResponse,
  DivisionList_putListArgs,
  DivisionList_putListResponse,
  Document_getArgs,
  Document_getResponse,
  DocumentContent_downloadContentArgs,
  DocumentContent_downloadContentResponse,
  DocumentArchive_deleteArgs,
  DocumentArchive_deleteResponse,
  DocumentArchive_putArgs,
  DocumentArchive_putResponse,
  DocumentArchiveAccount_accountPostArgs,
  DocumentArchiveAccount_accountPostResponse,
  DocumentArchiveAccount_getAccountArgs,
  DocumentArchiveAccount_getAccountResponse,
  DocumentArchiveCustomer_customerPostArgs,
  DocumentArchiveCustomer_customerPostResponse,
  DocumentArchiveCustomer_getCustomerArgs,
  DocumentArchiveCustomer_getCustomerResponse,
  DocumentArchiveDynamicControlForm_dynamicControlFormPostArgs,
  DocumentArchiveDynamicControlForm_dynamicControlFormPostResponse,
  DocumentArchiveDynamicControlForm_getDynamicControlFormArgs,
  DocumentArchiveDynamicControlForm_getDynamicControlFormResponse,
  DocumentArchiveEmployee_employeePostArgs,
  DocumentArchiveEmployee_employeePostResponse,
  DocumentArchiveEmployee_getEmployeeArgs,
  DocumentArchiveEmployee_getEmployeeResponse,
  DocumentArchiveProduct_getProductArgs,
  DocumentArchiveProduct_getProductResponse,
  DocumentArchiveProduct_productPostArgs,
  DocumentArchiveProduct_productPostResponse,
  DocumentArchiveProject_getProjectArgs,
  DocumentArchiveProject_getProjectResponse,
  DocumentArchiveProject_projectPostArgs,
  DocumentArchiveProject_projectPostResponse,
  DocumentArchiveReception_receptionPostArgs,
  DocumentArchiveReception_receptionPostResponse,
  DocumentArchiveSupplier_getSupplierArgs,
  DocumentArchiveSupplier_getSupplierResponse,
  DocumentArchiveSupplier_supplierPostArgs,
  DocumentArchiveSupplier_supplierPostResponse,
  Employee_getArgs,
  Employee_getResponse,
  Employee_postArgs,
  Employee_postResponse,
  Employee_putArgs,
  Employee_putResponse,
  Employee_searchArgs,
  Employee_searchResponse,
  EmployeeCategory_deleteArgs,
  EmployeeCategory_deleteResponse,
  EmployeeCategory_getArgs,
  EmployeeCategory_getResponse,
  EmployeeCategory_postArgs,
  EmployeeCategory_postResponse,
  EmployeeCategory_putArgs,
  EmployeeCategory_putResponse,
  EmployeeCategory_searchArgs,
  EmployeeCategory_searchResponse,
  EmployeeCategoryList_deleteByIdsArgs,
  EmployeeCategoryList_deleteByIdsResponse,
  EmployeeCategoryList_postListArgs,
  EmployeeCategoryList_postListResponse,
  EmployeeCategoryList_putListArgs,
  EmployeeCategoryList_putListResponse,
  EmployeeEmployment_getArgs,
  EmployeeEmployment_getResponse,
  EmployeeEmployment_postArgs,
  EmployeeEmployment_postResponse,
  EmployeeEmployment_putArgs,
  EmployeeEmployment_putResponse,
  EmployeeEmployment_searchArgs,
  EmployeeEmployment_searchResponse,
  EmployeeEmploymentDetails_getArgs,
  EmployeeEmploymentDetails_getResponse,
  EmployeeEmploymentDetails_postArgs,
  EmployeeEmploymentDetails_postResponse,
  EmployeeEmploymentDetails_putArgs,
  EmployeeEmploymentDetails_putResponse,
  EmployeeEmploymentDetails_searchArgs,
  EmployeeEmploymentDetails_searchResponse,
  EmployeeEmploymentEmploymentType_searchArgs,
  EmployeeEmploymentEmploymentType_searchResponse,
  EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeArgs,
  EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeResponse,
  EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeArgs,
  EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeResponse,
  EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeArgs,
  EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeResponse,
  EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeArgs,
  EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeResponse,
  EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeArgs,
  EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeResponse,
  EmployeeEmploymentLeaveOfAbsence_getArgs,
  EmployeeEmploymentLeaveOfAbsence_getResponse,
  EmployeeEmploymentLeaveOfAbsence_postArgs,
  EmployeeEmploymentLeaveOfAbsence_postResponse,
  EmployeeEmploymentLeaveOfAbsence_putArgs,
  EmployeeEmploymentLeaveOfAbsence_putResponse,
  EmployeeEmploymentLeaveOfAbsence_searchArgs,
  EmployeeEmploymentLeaveOfAbsence_searchResponse,
  EmployeeEmploymentLeaveOfAbsenceList_postListArgs,
  EmployeeEmploymentLeaveOfAbsenceList_postListResponse,
  EmployeeEmploymentLeaveOfAbsenceType_searchArgs,
  EmployeeEmploymentLeaveOfAbsenceType_searchResponse,
  EmployeeEmploymentOccupationCode_getArgs,
  EmployeeEmploymentOccupationCode_getResponse,
  EmployeeEmploymentOccupationCode_searchArgs,
  EmployeeEmploymentOccupationCode_searchResponse,
  EmployeeEmploymentRemunerationType_searchArgs,
  EmployeeEmploymentRemunerationType_searchResponse,
  EmployeeEmploymentWorkingHoursScheme_searchArgs,
  EmployeeEmploymentWorkingHoursScheme_searchResponse,
  EmployeeEntitlement_getArgs,
  EmployeeEntitlement_getResponse,
  EmployeeEntitlement_searchArgs,
  EmployeeEntitlement_searchResponse,
  EmployeeEntitlementClient_clientArgs,
  EmployeeEntitlementClient_clientResponse,
  EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateArgs,
  EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateResponse,
  EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateArgs,
  EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateResponse,
  EmployeeHourlyCostAndRate_getArgs,
  EmployeeHourlyCostAndRate_getResponse,
  EmployeeHourlyCostAndRate_postArgs,
  EmployeeHourlyCostAndRate_postResponse,
  EmployeeHourlyCostAndRate_putArgs,
  EmployeeHourlyCostAndRate_putResponse,
  EmployeeHourlyCostAndRate_searchArgs,
  EmployeeHourlyCostAndRate_searchResponse,
  EmployeeList_postListArgs,
  EmployeeList_postListResponse,
  EmployeeNextOfKin_getArgs,
  EmployeeNextOfKin_getResponse,
  EmployeeNextOfKin_postArgs,
  EmployeeNextOfKin_postResponse,
  EmployeeNextOfKin_putArgs,
  EmployeeNextOfKin_putResponse,
  EmployeeNextOfKin_searchArgs,
  EmployeeNextOfKin_searchResponse,
  EmployeePreferences_putArgs,
  EmployeePreferences_putResponse,
  EmployeePreferences_searchArgs,
  EmployeePreferences_searchResponse,
  EmployeePreferencesChangeLanguage_changeLanguageArgs,
  EmployeePreferencesChangeLanguage_changeLanguageResponse,
  EmployeePreferencesList_putListArgs,
  EmployeePreferencesList_putListResponse,
  EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesArgs,
  EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesResponse,
  EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsArgs,
  EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsResponse,
  EmployeeStandardTime_getArgs,
  EmployeeStandardTime_getResponse,
  EmployeeStandardTime_postArgs,
  EmployeeStandardTime_postResponse,
  EmployeeStandardTime_putArgs,
  EmployeeStandardTime_putResponse,
  EmployeeStandardTime_searchArgs,
  EmployeeStandardTime_searchResponse,
  EmployeeStandardTimeByDate_getByDateArgs,
  EmployeeStandardTimeByDate_getByDateResponse,
  Event_exampleArgs,
  Event_exampleResponse,
  Event_getArgs,
  Event_getResponse,
  EventSubscription_deleteArgs,
  EventSubscription_deleteResponse,
  EventSubscription_getArgs,
  EventSubscription_getResponse,
  EventSubscription_postArgs,
  EventSubscription_postResponse,
  EventSubscription_putArgs,
  EventSubscription_putResponse,
  EventSubscription_searchArgs,
  EventSubscription_searchResponse,
  EventSubscriptionList_deleteByIdsArgs,
  EventSubscriptionList_deleteByIdsResponse,
  EventSubscriptionList_postListArgs,
  EventSubscriptionList_postListResponse,
  EventSubscriptionList_putListArgs,
  EventSubscriptionList_putListResponse,
  IncomingInvoice_getArgs,
  IncomingInvoice_getResponse,
  IncomingInvoice_postArgs,
  IncomingInvoice_postResponse,
  IncomingInvoice_putArgs,
  IncomingInvoice_putResponse,
  IncomingInvoiceAddPayment_addPaymentArgs,
  IncomingInvoiceAddPayment_addPaymentResponse,
  IncomingInvoiceSearch_searchArgs,
  IncomingInvoiceSearch_searchResponse,
  InternalDebtCollector_getArgs,
  InternalDebtCollector_getResponse,
  InternalDebtCollectorDeactivate_deactivateArgs,
  InternalDebtCollectorDeactivate_deactivateResponse,
  InternalNhoAdminAbort_abortArgs,
  InternalNhoAdminAbort_abortResponse,
  Inventory_deleteArgs,
  Inventory_deleteResponse,
  Inventory_getArgs,
  Inventory_getResponse,
  Inventory_postArgs,
  Inventory_postResponse,
  Inventory_putArgs,
  Inventory_putResponse,
  Inventory_searchArgs,
  Inventory_searchResponse,
  InventoryInventories_searchArgs,
  InventoryInventories_searchResponse,
  InventoryLocation_deleteArgs,
  InventoryLocation_deleteResponse,
  InventoryLocation_getArgs,
  InventoryLocation_getResponse,
  InventoryLocation_postArgs,
  InventoryLocation_postResponse,
  InventoryLocation_putArgs,
  InventoryLocation_putResponse,
  InventoryLocation_searchArgs,
  InventoryLocation_searchResponse,
  InventoryLocationList_deleteByIdsArgs,
  InventoryLocationList_deleteByIdsResponse,
  InventoryLocationList_postListArgs,
  InventoryLocationList_postListResponse,
  InventoryLocationList_putListArgs,
  InventoryLocationList_putListResponse,
  InventoryStocktaking_deleteArgs,
  InventoryStocktaking_deleteResponse,
  InventoryStocktaking_getArgs,
  InventoryStocktaking_getResponse,
  InventoryStocktaking_postArgs,
  InventoryStocktaking_postResponse,
  InventoryStocktaking_putArgs,
  InventoryStocktaking_putResponse,
  InventoryStocktaking_searchArgs,
  InventoryStocktaking_searchResponse,
  InventoryStocktakingProductline_deleteArgs,
  InventoryStocktakingProductline_deleteResponse,
  InventoryStocktakingProductline_getArgs,
  InventoryStocktakingProductline_getResponse,
  InventoryStocktakingProductline_postArgs,
  InventoryStocktakingProductline_postResponse,
  InventoryStocktakingProductline_putArgs,
  InventoryStocktakingProductline_putResponse,
  InventoryStocktakingProductline_searchArgs,
  InventoryStocktakingProductline_searchResponse,
  InventoryStocktakingProductlineChangeLocation_changeLocationArgs,
  InventoryStocktakingProductlineChangeLocation_changeLocationResponse,
  Invoice_getArgs,
  Invoice_getResponse,
  Invoice_postArgs,
  Invoice_postResponse,
  Invoice_searchArgs,
  Invoice_searchResponse,
  InvoiceCreateCreditNote_createCreditNoteArgs,
  InvoiceCreateCreditNote_createCreditNoteResponse,
  InvoiceCreateReminder_createReminderArgs,
  InvoiceCreateReminder_createReminderResponse,
  InvoiceDetails_getArgs,
  InvoiceDetails_getResponse,
  InvoiceDetails_searchArgs,
  InvoiceDetails_searchResponse,
  InvoiceList_postListArgs,
  InvoiceList_postListResponse,
  InvoicePayment_paymentArgs,
  InvoicePayment_paymentResponse,
  InvoicePaymentType_getArgs,
  InvoicePaymentType_getResponse,
  InvoicePaymentType_searchArgs,
  InvoicePaymentType_searchResponse,
  InvoicePdf_downloadPdfArgs,
  InvoicePdf_downloadPdfResponse,
  InvoiceSend_sendArgs,
  InvoiceSend_sendResponse,
  InvoiceRemark_getArgs,
  InvoiceRemark_getResponse,
  Ledger_searchArgs,
  Ledger_searchResponse,
  LedgerAccount_deleteArgs,
  LedgerAccount_deleteResponse,
  LedgerAccount_getArgs,
  LedgerAccount_getResponse,
  LedgerAccount_postArgs,
  LedgerAccount_postResponse,
  LedgerAccount_putArgs,
  LedgerAccount_putResponse,
  LedgerAccount_searchArgs,
  LedgerAccount_searchResponse,
  LedgerAccountingDimensionName_deleteArgs,
  LedgerAccountingDimensionName_deleteResponse,
  LedgerAccountingDimensionName_getArgs,
  LedgerAccountingDimensionName_getResponse,
  LedgerAccountingDimensionName_getAllArgs,
  LedgerAccountingDimensionName_getAllResponse,
  LedgerAccountingDimensionName_postArgs,
  LedgerAccountingDimensionName_postResponse,
  LedgerAccountingDimensionName_putArgs,
  LedgerAccountingDimensionName_putResponse,
  LedgerAccountingDimensionNameSearch_searchArgs,
  LedgerAccountingDimensionNameSearch_searchResponse,
  LedgerAccountingDimensionValue_deleteArgs,
  LedgerAccountingDimensionValue_deleteResponse,
  LedgerAccountingDimensionValue_getArgs,
  LedgerAccountingDimensionValue_getResponse,
  LedgerAccountingDimensionValue_postArgs,
  LedgerAccountingDimensionValue_postResponse,
  LedgerAccountingDimensionValueList_putListArgs,
  LedgerAccountingDimensionValueList_putListResponse,
  LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesArgs,
  LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesResponse,
  LedgerAccountingPeriod_getArgs,
  LedgerAccountingPeriod_getResponse,
  LedgerAccountingPeriod_searchArgs,
  LedgerAccountingPeriod_searchResponse,
  LedgerAccountList_deleteByIdsArgs,
  LedgerAccountList_deleteByIdsResponse,
  LedgerAccountList_postListArgs,
  LedgerAccountList_postListResponse,
  LedgerAccountList_putListArgs,
  LedgerAccountList_putListResponse,
  LedgerAnnualAccount_getArgs,
  LedgerAnnualAccount_getResponse,
  LedgerAnnualAccount_searchArgs,
  LedgerAnnualAccount_searchResponse,
  LedgerCloseGroup_getArgs,
  LedgerCloseGroup_getResponse,
  LedgerCloseGroup_searchArgs,
  LedgerCloseGroup_searchResponse,
  LedgerOpenPost_openPostArgs,
  LedgerOpenPost_openPostResponse,
  LedgerPaymentTypeOut_deleteArgs,
  LedgerPaymentTypeOut_deleteResponse,
  LedgerPaymentTypeOut_getArgs,
  LedgerPaymentTypeOut_getResponse,
  LedgerPaymentTypeOut_postArgs,
  LedgerPaymentTypeOut_postResponse,
  LedgerPaymentTypeOut_putArgs,
  LedgerPaymentTypeOut_putResponse,
  LedgerPaymentTypeOut_searchArgs,
  LedgerPaymentTypeOut_searchResponse,
  LedgerPaymentTypeOutList_postListArgs,
  LedgerPaymentTypeOutList_postListResponse,
  LedgerPaymentTypeOutList_putListArgs,
  LedgerPaymentTypeOutList_putListResponse,
  LedgerPosting_getArgs,
  LedgerPosting_getResponse,
  LedgerPosting_searchArgs,
  LedgerPosting_searchResponse,
  LedgerPostingByDate_getArgs,
  LedgerPostingByDate_getResponse,
  LedgerPostingClosePostings_closePostingsArgs,
  LedgerPostingClosePostings_closePostingsResponse,
  LedgerPostingOpenPost_openPostArgs,
  LedgerPostingOpenPost_openPostResponse,
  LedgerPostingRules_getArgs,
  LedgerPostingRules_getResponse,
  LedgerVatSettings_getArgs,
  LedgerVatSettings_getResponse,
  LedgerVatSettings_putArgs,
  LedgerVatSettings_putResponse,
  LedgerVatType_getArgs,
  LedgerVatType_getResponse,
  LedgerVatType_searchArgs,
  LedgerVatType_searchResponse,
  LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeArgs,
  LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeResponse,
  LedgerVoucher_deleteArgs,
  LedgerVoucher_deleteResponse,
  LedgerVoucher_getArgs,
  LedgerVoucher_getResponse,
  LedgerVoucher_postArgs,
  LedgerVoucher_postResponse,
  LedgerVoucher_putArgs,
  LedgerVoucher_putResponse,
  LedgerVoucher_searchArgs,
  LedgerVoucher_searchResponse,
  LedgerVoucherAttachment_deleteAttachmentArgs,
  LedgerVoucherAttachment_deleteAttachmentResponse,
  LedgerVoucherAttachment_uploadAttachmentArgs,
  LedgerVoucherAttachment_uploadAttachmentResponse,
  LedgerVoucherExternalVoucherNumber_externalVoucherNumberArgs,
  LedgerVoucherExternalVoucherNumber_externalVoucherNumberResponse,
  LedgerVoucherHistoricalAttachment_uploadAttachmentArgs,
  LedgerVoucherHistoricalAttachment_uploadAttachmentResponse,
  LedgerVoucherHistoricalClosePostings_closePostingsArgs,
  LedgerVoucherHistoricalClosePostings_closePostingsResponse,
  LedgerVoucherHistoricalEmployee_postEmployeeArgs,
  LedgerVoucherHistoricalEmployee_postEmployeeResponse,
  LedgerVoucherHistoricalHistorical_postHistoricalArgs,
  LedgerVoucherHistoricalHistorical_postHistoricalResponse,
  LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersArgs,
  LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersResponse,
  LedgerVoucherImportDocument_importDocumentArgs,
  LedgerVoucherImportDocument_importDocumentResponse,
  LedgerVoucherImportGbat10_importGbat10Args,
  LedgerVoucherImportGbat10_importGbat10Response,
  LedgerVoucherList_putListArgs,
  LedgerVoucherList_putListResponse,
  LedgerVoucherNonPosted_nonPostedArgs,
  LedgerVoucherNonPosted_nonPostedResponse,
  LedgerVoucherOpeningBalance_deleteArgs,
  LedgerVoucherOpeningBalance_deleteResponse,
  LedgerVoucherOpeningBalance_getArgs,
  LedgerVoucherOpeningBalance_getResponse,
  LedgerVoucherOpeningBalance_postArgs,
  LedgerVoucherOpeningBalance_postResponse,
  LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherArgs,
  LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherResponse,
  LedgerVoucherOptions_optionsArgs,
  LedgerVoucherOptions_optionsResponse,
  LedgerVoucherPdf_downloadPdfArgs,
  LedgerVoucherPdf_downloadPdfResponse,
  LedgerVoucherPdf_uploadPdfArgs,
  LedgerVoucherPdf_uploadPdfResponse,
  LedgerVoucherReverse_reverseArgs,
  LedgerVoucherReverse_reverseResponse,
  LedgerVoucherSendToInbox_sendToInboxArgs,
  LedgerVoucherSendToInbox_sendToInboxResponse,
  LedgerVoucherSendToLedger_sendToLedgerArgs,
  LedgerVoucherSendToLedger_sendToLedgerResponse,
  LedgerVoucherType_getArgs,
  LedgerVoucherType_getResponse,
  LedgerVoucherType_searchArgs,
  LedgerVoucherType_searchResponse,
  LedgerVoucherVoucherReception_voucherReceptionArgs,
  LedgerVoucherVoucherReception_voucherReceptionResponse,
  Municipality_searchArgs,
  Municipality_searchResponse,
  MunicipalityQuery_queryArgs,
  MunicipalityQuery_queryResponse,
  Order_deleteArgs,
  Order_deleteResponse,
  Order_getArgs,
  Order_getResponse,
  Order_postArgs,
  Order_postResponse,
  Order_putArgs,
  Order_putResponse,
  Order_searchArgs,
  Order_searchResponse,
  OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceArgs,
  OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceResponse,
  OrderAttach_attachArgs,
  OrderAttach_attachResponse,
  OrderInvoice_invoiceArgs,
  OrderInvoice_invoiceResponse,
  OrderInvoiceMultipleOrders_invoiceMultipleOrdersArgs,
  OrderInvoiceMultipleOrders_invoiceMultipleOrdersResponse,
  OrderList_postListArgs,
  OrderList_postListResponse,
  OrderOrderConfirmationPdf_downloadPdfArgs,
  OrderOrderConfirmationPdf_downloadPdfResponse,
  OrderOrderGroup_deleteArgs,
  OrderOrderGroup_deleteResponse,
  OrderOrderGroup_getArgs,
  OrderOrderGroup_getResponse,
  OrderOrderGroup_postArgs,
  OrderOrderGroup_postResponse,
  OrderOrderGroup_putArgs,
  OrderOrderGroup_putResponse,
  OrderOrderGroup_searchArgs,
  OrderOrderGroup_searchResponse,
  OrderOrderline_deleteArgs,
  OrderOrderline_deleteResponse,
  OrderOrderline_getArgs,
  OrderOrderline_getResponse,
  OrderOrderline_postArgs,
  OrderOrderline_postResponse,
  OrderOrderline_putArgs,
  OrderOrderline_putResponse,
  OrderOrderlineList_postListArgs,
  OrderOrderlineList_postListResponse,
  OrderOrderlineOrderLineTemplate_orderLineTemplateArgs,
  OrderOrderlineOrderLineTemplate_orderLineTemplateResponse,
  OrderOrderlinePickLine_pickLineArgs,
  OrderOrderlinePickLine_pickLineResponse,
  OrderOrderlineUnpickLine_unpickLineArgs,
  OrderOrderlineUnpickLine_unpickLineResponse,
  OrderPackingNotePdf_downloadPackingNotePdfArgs,
  OrderPackingNotePdf_downloadPackingNotePdfResponse,
  OrderSendInvoicePreview_postInvoicePreviewArgs,
  OrderSendInvoicePreview_postInvoicePreviewResponse,
  OrderSendOrderConfirmation_postOrderConfirmationArgs,
  OrderSendOrderConfirmation_postOrderConfirmationResponse,
  OrderSendPackingNote_postPackingNoteArgs,
  OrderSendPackingNote_postPackingNoteResponse,
  OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceArgs,
  OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceResponse,
  Pension_searchArgs,
  Pension_searchResponse,
  PickupPoint_getArgs,
  PickupPoint_getResponse,
  PickupPoint_searchArgs,
  PickupPoint_searchResponse,
  PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdArgs,
  PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdResponse,
  Product_deleteArgs,
  Product_deleteResponse,
  Product_getArgs,
  Product_getResponse,
  Product_postArgs,
  Product_postResponse,
  Product_putArgs,
  Product_putResponse,
  Product_searchArgs,
  Product_searchResponse,
  ProductDiscountGroup_getArgs,
  ProductDiscountGroup_getResponse,
  ProductDiscountGroup_searchArgs,
  ProductDiscountGroup_searchResponse,
  ProductExternal_getArgs,
  ProductExternal_getResponse,
  ProductExternal_searchArgs,
  ProductExternal_searchResponse,
  ProductGroup_deleteArgs,
  ProductGroup_deleteResponse,
  ProductGroup_getArgs,
  ProductGroup_getResponse,
  ProductGroup_postArgs,
  ProductGroup_postResponse,
  ProductGroup_putArgs,
  ProductGroup_putResponse,
  ProductGroup_searchArgs,
  ProductGroup_searchResponse,
  ProductGroupList_deleteByIdsArgs,
  ProductGroupList_deleteByIdsResponse,
  ProductGroupList_postListArgs,
  ProductGroupList_postListResponse,
  ProductGroupList_putListArgs,
  ProductGroupList_putListResponse,
  ProductGroupQuery_queryArgs,
  ProductGroupQuery_queryResponse,
  ProductGroupRelation_deleteArgs,
  ProductGroupRelation_deleteResponse,
  ProductGroupRelation_getArgs,
  ProductGroupRelation_getResponse,
  ProductGroupRelation_postArgs,
  ProductGroupRelation_postResponse,
  ProductGroupRelation_searchArgs,
  ProductGroupRelation_searchResponse,
  ProductGroupRelationList_deleteListArgs,
  ProductGroupRelationList_deleteListResponse,
  ProductGroupRelationList_postListArgs,
  ProductGroupRelationList_postListResponse,
  ProductImage_deleteImageArgs,
  ProductImage_deleteImageResponse,
  ProductImage_uploadImageArgs,
  ProductImage_uploadImageResponse,
  ProductInventoryLocation_deleteArgs,
  ProductInventoryLocation_deleteResponse,
  ProductInventoryLocation_getArgs,
  ProductInventoryLocation_getResponse,
  ProductInventoryLocation_postArgs,
  ProductInventoryLocation_postResponse,
  ProductInventoryLocation_putArgs,
  ProductInventoryLocation_putResponse,
  ProductInventoryLocation_searchArgs,
  ProductInventoryLocation_searchResponse,
  ProductInventoryLocationList_postListArgs,
  ProductInventoryLocationList_postListResponse,
  ProductInventoryLocationList_putListArgs,
  ProductInventoryLocationList_putListResponse,
  ProductList_postListArgs,
  ProductList_postListResponse,
  ProductList_putListArgs,
  ProductList_putListResponse,
  ProductLogisticsSettings_getArgs,
  ProductLogisticsSettings_getResponse,
  ProductLogisticsSettings_putArgs,
  ProductLogisticsSettings_putResponse,
  ProductProductPrice_searchArgs,
  ProductProductPrice_searchResponse,
  ProductSupplierProduct_deleteArgs,
  ProductSupplierProduct_deleteResponse,
  ProductSupplierProduct_getArgs,
  ProductSupplierProduct_getResponse,
  ProductSupplierProduct_postArgs,
  ProductSupplierProduct_postResponse,
  ProductSupplierProduct_putArgs,
  ProductSupplierProduct_putResponse,
  ProductSupplierProduct_searchArgs,
  ProductSupplierProduct_searchResponse,
  ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsArgs,
  ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsResponse,
  ProductSupplierProductList_postListArgs,
  ProductSupplierProductList_postListResponse,
  ProductSupplierProductList_putListArgs,
  ProductSupplierProductList_putListResponse,
  ProductUnit_deleteArgs,
  ProductUnit_deleteResponse,
  ProductUnit_getArgs,
  ProductUnit_getResponse,
  ProductUnit_postArgs,
  ProductUnit_postResponse,
  ProductUnit_putArgs,
  ProductUnit_putResponse,
  ProductUnit_searchArgs,
  ProductUnit_searchResponse,
  ProductUnitList_postListArgs,
  ProductUnitList_postListResponse,
  ProductUnitList_putListArgs,
  ProductUnitList_putListResponse,
  ProductUnitMaster_getArgs,
  ProductUnitMaster_getResponse,
  ProductUnitMaster_searchArgs,
  ProductUnitMaster_searchResponse,
  ProductUnitQuery_queryArgs,
  ProductUnitQuery_queryResponse,
  Project_deleteArgs,
  Project_deleteResponse,
  Project_deleteListArgs,
  Project_deleteListResponse,
  Project_getArgs,
  Project_getResponse,
  Project_postArgs,
  Project_postResponse,
  Project_putArgs,
  Project_putResponse,
  Project_searchArgs,
  Project_searchResponse,
  ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsArgs,
  ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsResponse,
  ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsArgs,
  ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsResponse,
  ProjectCategory_getArgs,
  ProjectCategory_getResponse,
  ProjectCategory_postArgs,
  ProjectCategory_postResponse,
  ProjectCategory_putArgs,
  ProjectCategory_putResponse,
  ProjectCategory_searchArgs,
  ProjectCategory_searchResponse,
  ProjectControlForm_getArgs,
  ProjectControlForm_getResponse,
  ProjectControlForm_searchArgs,
  ProjectControlForm_searchResponse,
  ProjectControlFormType_getArgs,
  ProjectControlFormType_getResponse,
  ProjectControlFormType_searchArgs,
  ProjectControlFormType_searchResponse,
  ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormArgs,
  ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormResponse,
  ProjectForTimeSheet_getForTimeSheetArgs,
  ProjectForTimeSheet_getForTimeSheetResponse,
  ProjectHourlyRates_deleteArgs,
  ProjectHourlyRates_deleteResponse,
  ProjectHourlyRates_getArgs,
  ProjectHourlyRates_getResponse,
  ProjectHourlyRates_postArgs,
  ProjectHourlyRates_postResponse,
  ProjectHourlyRates_putArgs,
  ProjectHourlyRates_putResponse,
  ProjectHourlyRates_searchArgs,
  ProjectHourlyRates_searchResponse,
  ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsArgs,
  ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsResponse,
  ProjectHourlyRatesList_deleteByIdsArgs,
  ProjectHourlyRatesList_deleteByIdsResponse,
  ProjectHourlyRatesList_postListArgs,
  ProjectHourlyRatesList_postListResponse,
  ProjectHourlyRatesList_putListArgs,
  ProjectHourlyRatesList_putListResponse,
  ProjectHourlyRatesProjectSpecificRates_deleteArgs,
  ProjectHourlyRatesProjectSpecificRates_deleteResponse,
  ProjectHourlyRatesProjectSpecificRates_getArgs,
  ProjectHourlyRatesProjectSpecificRates_getResponse,
  ProjectHourlyRatesProjectSpecificRates_postArgs,
  ProjectHourlyRatesProjectSpecificRates_postResponse,
  ProjectHourlyRatesProjectSpecificRates_putArgs,
  ProjectHourlyRatesProjectSpecificRates_putResponse,
  ProjectHourlyRatesProjectSpecificRates_searchArgs,
  ProjectHourlyRatesProjectSpecificRates_searchResponse,
  ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsArgs,
  ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsResponse,
  ProjectHourlyRatesProjectSpecificRatesList_postListArgs,
  ProjectHourlyRatesProjectSpecificRatesList_postListResponse,
  ProjectHourlyRatesProjectSpecificRatesList_putListArgs,
  ProjectHourlyRatesProjectSpecificRatesList_putListResponse,
  ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesArgs,
  ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesResponse,
  ProjectImport_importProjectStatementArgs,
  ProjectImport_importProjectStatementResponse,
  ProjectList_deleteByIdsArgs,
  ProjectList_deleteByIdsResponse,
  ProjectList_postListArgs,
  ProjectList_postListResponse,
  ProjectList_putListArgs,
  ProjectList_putListResponse,
  ProjectNumber_getByNumberArgs,
  ProjectNumber_getByNumberResponse,
  ProjectOrderline_deleteArgs,
  ProjectOrderline_deleteResponse,
  ProjectOrderline_getArgs,
  ProjectOrderline_getResponse,
  ProjectOrderline_postArgs,
  ProjectOrderline_postResponse,
  ProjectOrderline_putArgs,
  ProjectOrderline_putResponse,
  ProjectOrderline_searchArgs,
  ProjectOrderline_searchResponse,
  ProjectOrderlineList_postListArgs,
  ProjectOrderlineList_postListResponse,
  ProjectOrderlineOrderLineTemplate_orderLineTemplateArgs,
  ProjectOrderlineOrderLineTemplate_orderLineTemplateResponse,
  ProjectOrderlineQuery_queryArgs,
  ProjectOrderlineQuery_queryResponse,
  ProjectParticipant_getArgs,
  ProjectParticipant_getResponse,
  ProjectParticipant_postArgs,
  ProjectParticipant_postResponse,
  ProjectParticipant_putArgs,
  ProjectParticipant_putResponse,
  ProjectParticipantList_deleteByIdsArgs,
  ProjectParticipantList_deleteByIdsResponse,
  ProjectParticipantList_postListArgs,
  ProjectParticipantList_postListResponse,
  ProjectPeriodBudgetStatus_getBudgetStatusArgs,
  ProjectPeriodBudgetStatus_getBudgetStatusResponse,
  ProjectPeriodHourlistReport_hourlistReportArgs,
  ProjectPeriodHourlistReport_hourlistReportResponse,
  ProjectPeriodInvoiced_invoicedArgs,
  ProjectPeriodInvoiced_invoicedResponse,
  ProjectPeriodInvoicingReserve_invoicingReserveArgs,
  ProjectPeriodInvoicingReserve_invoicingReserveResponse,
  ProjectPeriodMonthlyStatus_monthlyStatusArgs,
  ProjectPeriodMonthlyStatus_monthlyStatusResponse,
  ProjectPeriodOverallStatus_overallStatusArgs,
  ProjectPeriodOverallStatus_overallStatusResponse,
  ProjectProjectActivity_deleteArgs,
  ProjectProjectActivity_deleteResponse,
  ProjectProjectActivity_getArgs,
  ProjectProjectActivity_getResponse,
  ProjectProjectActivity_postArgs,
  ProjectProjectActivity_postResponse,
  ProjectProjectActivityList_deleteByIdsArgs,
  ProjectProjectActivityList_deleteByIdsResponse,
  ProjectResourcePlanBudget_getArgs,
  ProjectResourcePlanBudget_getResponse,
  ProjectSettings_getArgs,
  ProjectSettings_getResponse,
  ProjectSettings_putArgs,
  ProjectSettings_putResponse,
  ProjectSubcontract_deleteArgs,
  ProjectSubcontract_deleteResponse,
  ProjectSubcontract_getArgs,
  ProjectSubcontract_getResponse,
  ProjectSubcontract_postArgs,
  ProjectSubcontract_postResponse,
  ProjectSubcontract_putArgs,
  ProjectSubcontract_putResponse,
  ProjectSubcontract_searchArgs,
  ProjectSubcontract_searchResponse,
  ProjectSubcontractQuery_queryArgs,
  ProjectSubcontractQuery_queryResponse,
  ProjectTask_searchArgs,
  ProjectTask_searchResponse,
  ProjectTemplate_getArgs,
  ProjectTemplate_getResponse,
  PurchaseOrder_deleteArgs,
  PurchaseOrder_deleteResponse,
  PurchaseOrder_getArgs,
  PurchaseOrder_getResponse,
  PurchaseOrder_postArgs,
  PurchaseOrder_postResponse,
  PurchaseOrder_putArgs,
  PurchaseOrder_putResponse,
  PurchaseOrder_searchArgs,
  PurchaseOrder_searchResponse,
  PurchaseOrderAttachment_deleteAttachmentArgs,
  PurchaseOrderAttachment_deleteAttachmentResponse,
  PurchaseOrderAttachment_uploadAttachmentArgs,
  PurchaseOrderAttachment_uploadAttachmentResponse,
  PurchaseOrderAttachmentList_uploadAttachmentsArgs,
  PurchaseOrderAttachmentList_uploadAttachmentsResponse,
  PurchaseOrderDeviation_deleteArgs,
  PurchaseOrderDeviation_deleteResponse,
  PurchaseOrderDeviation_getArgs,
  PurchaseOrderDeviation_getResponse,
  PurchaseOrderDeviation_postArgs,
  PurchaseOrderDeviation_postResponse,
  PurchaseOrderDeviation_putArgs,
  PurchaseOrderDeviation_putResponse,
  PurchaseOrderDeviation_searchArgs,
  PurchaseOrderDeviation_searchResponse,
  PurchaseOrderDeviationApprove_approveArgs,
  PurchaseOrderDeviationApprove_approveResponse,
  PurchaseOrderDeviationDeliver_deliverArgs,
  PurchaseOrderDeviationDeliver_deliverResponse,
  PurchaseOrderDeviationList_postListArgs,
  PurchaseOrderDeviationList_postListResponse,
  PurchaseOrderDeviationList_putListArgs,
  PurchaseOrderDeviationList_putListResponse,
  PurchaseOrderDeviationUndeliver_undeliverArgs,
  PurchaseOrderDeviationUndeliver_undeliverResponse,
  PurchaseOrderGoodsReceipt_deleteArgs,
  PurchaseOrderGoodsReceipt_deleteResponse,
  PurchaseOrderGoodsReceipt_getArgs,
  PurchaseOrderGoodsReceipt_getResponse,
  PurchaseOrderGoodsReceipt_postArgs,
  PurchaseOrderGoodsReceipt_postResponse,
  PurchaseOrderGoodsReceipt_putArgs,
  PurchaseOrderGoodsReceipt_putResponse,
  PurchaseOrderGoodsReceipt_searchArgs,
  PurchaseOrderGoodsReceipt_searchResponse,
  PurchaseOrderGoodsReceiptConfirm_confirmArgs,
  PurchaseOrderGoodsReceiptConfirm_confirmResponse,
  PurchaseOrderGoodsReceiptLine_deleteArgs,
  PurchaseOrderGoodsReceiptLine_deleteResponse,
  PurchaseOrderGoodsReceiptLine_getArgs,
  PurchaseOrderGoodsReceiptLine_getResponse,
  PurchaseOrderGoodsReceiptLine_postArgs,
  PurchaseOrderGoodsReceiptLine_postResponse,
  PurchaseOrderGoodsReceiptLine_putArgs,
  PurchaseOrderGoodsReceiptLine_putResponse,
  PurchaseOrderGoodsReceiptLine_searchArgs,
  PurchaseOrderGoodsReceiptLine_searchResponse,
  PurchaseOrderGoodsReceiptLineList_deleteListArgs,
  PurchaseOrderGoodsReceiptLineList_deleteListResponse,
  PurchaseOrderGoodsReceiptLineList_postListArgs,
  PurchaseOrderGoodsReceiptLineList_postListResponse,
  PurchaseOrderGoodsReceiptLineList_putListArgs,
  PurchaseOrderGoodsReceiptLineList_putListResponse,
  PurchaseOrderGoodsReceiptList_deleteByIdsArgs,
  PurchaseOrderGoodsReceiptList_deleteByIdsResponse,
  PurchaseOrderGoodsReceiptList_postListArgs,
  PurchaseOrderGoodsReceiptList_postListResponse,
  PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmArgs,
  PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmResponse,
  PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptArgs,
  PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptResponse,
  PurchaseOrderOrderline_deleteArgs,
  PurchaseOrderOrderline_deleteResponse,
  PurchaseOrderOrderline_getArgs,
  PurchaseOrderOrderline_getResponse,
  PurchaseOrderOrderline_postArgs,
  PurchaseOrderOrderline_postResponse,
  PurchaseOrderOrderline_putArgs,
  PurchaseOrderOrderline_putResponse,
  PurchaseOrderOrderlineList_deleteListArgs,
  PurchaseOrderOrderlineList_deleteListResponse,
  PurchaseOrderOrderlineList_postListArgs,
  PurchaseOrderOrderlineList_postListResponse,
  PurchaseOrderOrderlineList_putListArgs,
  PurchaseOrderOrderlineList_putListResponse,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteArgs,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteResponse,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getArgs,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getResponse,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postArgs,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postResponse,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchArgs,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchResponse,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsArgs,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsResponse,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListArgs,
  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListResponse,
  PurchaseOrderSend_sendArgs,
  PurchaseOrderSend_sendResponse,
  PurchaseOrderSendByEmail_sendByEmailArgs,
  PurchaseOrderSendByEmail_sendByEmailResponse,
  Reminder_getArgs,
  Reminder_getResponse,
  Reminder_searchArgs,
  Reminder_searchResponse,
  ReminderPdf_downloadPdfArgs,
  ReminderPdf_downloadPdfResponse,
  Resultbudget_searchArgs,
  Resultbudget_searchResponse,
  ResultbudgetCompany_getCompanyResultBudgetArgs,
  ResultbudgetCompany_getCompanyResultBudgetResponse,
  ResultbudgetDepartment_getDepartmentResultBudgetArgs,
  ResultbudgetDepartment_getDepartmentResultBudgetResponse,
  ResultbudgetEmployee_getEmployeeResultBudgetArgs,
  ResultbudgetEmployee_getEmployeeResultBudgetResponse,
  ResultbudgetProduct_getProductResultBudgetArgs,
  ResultbudgetProduct_getProductResultBudgetResponse,
  ResultbudgetProject_getProjectResultBudgetArgs,
  ResultbudgetProject_getProjectResultBudgetResponse,
  SaftExportSAFT_exportSAFTArgs,
  SaftExportSAFT_exportSAFTResponse,
  SaftImportSAFT_importSAFTArgs,
  SaftImportSAFT_importSAFTResponse,
  SalaryCompilation_getArgs,
  SalaryCompilation_getResponse,
  SalaryCompilationPdf_downloadPdfArgs,
  SalaryCompilationPdf_downloadPdfResponse,
  SalaryFinanceTaxReconciliationContext_postContextArgs,
  SalaryFinanceTaxReconciliationContext_postContextResponse,
  SalaryFinanceTaxReconciliationOverview_getOverviewArgs,
  SalaryFinanceTaxReconciliationOverview_getOverviewResponse,
  SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsArgs,
  SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsResponse,
  SalaryHolidayAllowanceReconciliationContext_postContextArgs,
  SalaryHolidayAllowanceReconciliationContext_postContextResponse,
  SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsArgs,
  SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsResponse,
  SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryArgs,
  SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryResponse,
  SalaryMandatoryDeductionReconciliationContext_postContextArgs,
  SalaryMandatoryDeductionReconciliationContext_postContextResponse,
  SalaryMandatoryDeductionReconciliationOverview_getOverviewArgs,
  SalaryMandatoryDeductionReconciliationOverview_getOverviewResponse,
  SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsArgs,
  SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsResponse,
  SalaryPayrollTaxReconciliationContext_postContextArgs,
  SalaryPayrollTaxReconciliationContext_postContextResponse,
  SalaryPayrollTaxReconciliationOverview_getOverviewArgs,
  SalaryPayrollTaxReconciliationOverview_getOverviewResponse,
  SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsArgs,
  SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsResponse,
  SalaryPayslip_getArgs,
  SalaryPayslip_getResponse,
  SalaryPayslip_searchArgs,
  SalaryPayslip_searchResponse,
  SalaryPayslipPdf_downloadPdfArgs,
  SalaryPayslipPdf_downloadPdfResponse,
  SalarySettings_getArgs,
  SalarySettings_getResponse,
  SalarySettings_putArgs,
  SalarySettings_putResponse,
  SalarySettingsHoliday_postArgs,
  SalarySettingsHoliday_postResponse,
  SalarySettingsHoliday_putArgs,
  SalarySettingsHoliday_putResponse,
  SalarySettingsHoliday_searchArgs,
  SalarySettingsHoliday_searchResponse,
  SalarySettingsHolidayList_deleteByIdsArgs,
  SalarySettingsHolidayList_deleteByIdsResponse,
  SalarySettingsHolidayList_postListArgs,
  SalarySettingsHolidayList_postListResponse,
  SalarySettingsHolidayList_putListArgs,
  SalarySettingsHolidayList_putListResponse,
  SalarySettingsPensionScheme_deleteArgs,
  SalarySettingsPensionScheme_deleteResponse,
  SalarySettingsPensionScheme_getArgs,
  SalarySettingsPensionScheme_getResponse,
  SalarySettingsPensionScheme_postArgs,
  SalarySettingsPensionScheme_postResponse,
  SalarySettingsPensionScheme_putArgs,
  SalarySettingsPensionScheme_putResponse,
  SalarySettingsPensionScheme_searchArgs,
  SalarySettingsPensionScheme_searchResponse,
  SalarySettingsPensionSchemeList_deleteByIdsArgs,
  SalarySettingsPensionSchemeList_deleteByIdsResponse,
  SalarySettingsPensionSchemeList_postListArgs,
  SalarySettingsPensionSchemeList_postListResponse,
  SalarySettingsPensionSchemeList_putListArgs,
  SalarySettingsPensionSchemeList_putListResponse,
  SalarySettingsStandardTime_getArgs,
  SalarySettingsStandardTime_getResponse,
  SalarySettingsStandardTime_postArgs,
  SalarySettingsStandardTime_postResponse,
  SalarySettingsStandardTime_putArgs,
  SalarySettingsStandardTime_putResponse,
  SalarySettingsStandardTime_searchArgs,
  SalarySettingsStandardTime_searchResponse,
  SalarySettingsStandardTimeByDate_getByDateArgs,
  SalarySettingsStandardTimeByDate_getByDateResponse,
  SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsArgs,
  SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsResponse,
  SalaryTaxDeductionReconciliationContext_postContextArgs,
  SalaryTaxDeductionReconciliationContext_postContextResponse,
  SalaryTaxDeductionReconciliationOverview_getOverviewArgs,
  SalaryTaxDeductionReconciliationOverview_getOverviewResponse,
  SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsArgs,
  SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsResponse,
  SalaryTransaction_deleteArgs,
  SalaryTransaction_deleteResponse,
  SalaryTransaction_getArgs,
  SalaryTransaction_getResponse,
  SalaryTransaction_postArgs,
  SalaryTransaction_postResponse,
  SalaryTransactionAttachment_uploadAttachmentArgs,
  SalaryTransactionAttachment_uploadAttachmentResponse,
  SalaryTransactionAttachmentList_uploadAttachmentsArgs,
  SalaryTransactionAttachmentList_uploadAttachmentsResponse,
  SalaryTransactionDeleteAttachment_deleteAttachmentArgs,
  SalaryTransactionDeleteAttachment_deleteAttachmentResponse,
  SalaryType_getArgs,
  SalaryType_getResponse,
  SalaryType_searchArgs,
  SalaryType_searchResponse,
  SubscriptionCancel_cancelArgs,
  SubscriptionCancel_cancelResponse,
  SubscriptionPackages_getPackagesArgs,
  SubscriptionPackages_getPackagesResponse,
  SubscriptionReactivate_reactivateArgs,
  SubscriptionReactivate_reactivateResponse,
  Supplier_deleteArgs,
  Supplier_deleteResponse,
  Supplier_getArgs,
  Supplier_getResponse,
  Supplier_postArgs,
  Supplier_postResponse,
  Supplier_putArgs,
  Supplier_putResponse,
  Supplier_searchArgs,
  Supplier_searchResponse,
  SupplierList_postListArgs,
  SupplierList_postListResponse,
  SupplierList_putListArgs,
  SupplierList_putListResponse,
  SupplierCustomerSearch_searchArgs,
  SupplierCustomerSearch_searchResponse,
  SupplierInvoice_getArgs,
  SupplierInvoice_getResponse,
  SupplierInvoice_searchArgs,
  SupplierInvoice_searchResponse,
  SupplierInvoiceAddPayment_addPaymentArgs,
  SupplierInvoiceAddPayment_addPaymentResponse,
  SupplierInvoiceAddRecipient_addRecipientArgs,
  SupplierInvoiceAddRecipient_addRecipientResponse,
  SupplierInvoiceAddRecipient_addRecipientToManyArgs,
  SupplierInvoiceAddRecipient_addRecipientToManyResponse,
  SupplierInvoiceApprove_approveArgs,
  SupplierInvoiceApprove_approveResponse,
  SupplierInvoiceApprove_approveManyArgs,
  SupplierInvoiceApprove_approveManyResponse,
  SupplierInvoiceChangeDimension_changeDimensionManyArgs,
  SupplierInvoiceChangeDimension_changeDimensionManyResponse,
  SupplierInvoiceForApproval_getApprovalInvoicesArgs,
  SupplierInvoiceForApproval_getApprovalInvoicesResponse,
  SupplierInvoicePdf_downloadPdfArgs,
  SupplierInvoicePdf_downloadPdfResponse,
  SupplierInvoiceReject_rejectArgs,
  SupplierInvoiceReject_rejectResponse,
  SupplierInvoiceReject_rejectManyArgs,
  SupplierInvoiceReject_rejectManyResponse,
  SupplierInvoiceVoucherPostings_putPostingsArgs,
  SupplierInvoiceVoucherPostings_putPostingsResponse,
  SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersArgs,
  SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersResponse,
  SupportDashboardExport_exportArgs,
  SupportDashboardExport_exportResponse,
  TimesheetAllocated_deleteArgs,
  TimesheetAllocated_deleteResponse,
  TimesheetAllocated_getArgs,
  TimesheetAllocated_getResponse,
  TimesheetAllocated_postArgs,
  TimesheetAllocated_postResponse,
  TimesheetAllocated_putArgs,
  TimesheetAllocated_putResponse,
  TimesheetAllocated_searchArgs,
  TimesheetAllocated_searchResponse,
  TimesheetAllocatedApprove_approveArgs,
  TimesheetAllocatedApprove_approveResponse,
  TimesheetAllocatedApproveList_approveListArgs,
  TimesheetAllocatedApproveList_approveListResponse,
  TimesheetAllocatedList_postListArgs,
  TimesheetAllocatedList_postListResponse,
  TimesheetAllocatedList_putListArgs,
  TimesheetAllocatedList_putListResponse,
  TimesheetAllocatedUnapprove_unapproveArgs,
  TimesheetAllocatedUnapprove_unapproveResponse,
  TimesheetAllocatedUnapproveList_unapproveListArgs,
  TimesheetAllocatedUnapproveList_unapproveListResponse,
  TimesheetCompanyHoliday_deleteArgs,
  TimesheetCompanyHoliday_deleteResponse,
  TimesheetCompanyHoliday_getArgs,
  TimesheetCompanyHoliday_getResponse,
  TimesheetCompanyHoliday_postArgs,
  TimesheetCompanyHoliday_postResponse,
  TimesheetCompanyHoliday_putArgs,
  TimesheetCompanyHoliday_putResponse,
  TimesheetCompanyHoliday_searchArgs,
  TimesheetCompanyHoliday_searchResponse,
  TimesheetEntry_deleteArgs,
  TimesheetEntry_deleteResponse,
  TimesheetEntry_getArgs,
  TimesheetEntry_getResponse,
  TimesheetEntry_postArgs,
  TimesheetEntry_postResponse,
  TimesheetEntry_putArgs,
  TimesheetEntry_putResponse,
  TimesheetEntry_searchArgs,
  TimesheetEntry_searchResponse,
  TimesheetEntryList_postListArgs,
  TimesheetEntryList_postListResponse,
  TimesheetEntryList_putListArgs,
  TimesheetEntryList_putListResponse,
  TimesheetEntryRecentActivities_getRecentActivitiesArgs,
  TimesheetEntryRecentActivities_getRecentActivitiesResponse,
  TimesheetEntryRecentProjects_getRecentProjectsArgs,
  TimesheetEntryRecentProjects_getRecentProjectsResponse,
  TimesheetEntryTotalHours_getTotalHoursArgs,
  TimesheetEntryTotalHours_getTotalHoursResponse,
  TimesheetMonth_getArgs,
  TimesheetMonth_getResponse,
  TimesheetMonthApprove_approveArgs,
  TimesheetMonthApprove_approveResponse,
  TimesheetMonthByMonthNumber_getByMonthNumberArgs,
  TimesheetMonthByMonthNumber_getByMonthNumberResponse,
  TimesheetMonthByMonthNumberList_getByMonthNumberListArgs,
  TimesheetMonthByMonthNumberList_getByMonthNumberListResponse,
  TimesheetMonthComplete_completeArgs,
  TimesheetMonthComplete_completeResponse,
  TimesheetMonthReopen_reopenArgs,
  TimesheetMonthReopen_reopenResponse,
  TimesheetMonthUnapprove_unapproveArgs,
  TimesheetMonthUnapprove_unapproveResponse,
  TimesheetSalaryProjectTypeSpecification_deleteArgs,
  TimesheetSalaryProjectTypeSpecification_deleteResponse,
  TimesheetSalaryProjectTypeSpecification_getArgs,
  TimesheetSalaryProjectTypeSpecification_getResponse,
  TimesheetSalaryProjectTypeSpecification_postArgs,
  TimesheetSalaryProjectTypeSpecification_postResponse,
  TimesheetSalaryProjectTypeSpecification_putArgs,
  TimesheetSalaryProjectTypeSpecification_putResponse,
  TimesheetSalaryProjectTypeSpecification_searchArgs,
  TimesheetSalaryProjectTypeSpecification_searchResponse,
  TimesheetSalaryTypeSpecification_deleteArgs,
  TimesheetSalaryTypeSpecification_deleteResponse,
  TimesheetSalaryTypeSpecification_getArgs,
  TimesheetSalaryTypeSpecification_getResponse,
  TimesheetSalaryTypeSpecification_postArgs,
  TimesheetSalaryTypeSpecification_postResponse,
  TimesheetSalaryTypeSpecification_putArgs,
  TimesheetSalaryTypeSpecification_putResponse,
  TimesheetSalaryTypeSpecification_searchArgs,
  TimesheetSalaryTypeSpecification_searchResponse,
  TimesheetSettings_getArgs,
  TimesheetSettings_getResponse,
  TimesheetTimeClock_getArgs,
  TimesheetTimeClock_getResponse,
  TimesheetTimeClock_putArgs,
  TimesheetTimeClock_putResponse,
  TimesheetTimeClock_searchArgs,
  TimesheetTimeClock_searchResponse,
  TimesheetTimeClockPresent_getPresentArgs,
  TimesheetTimeClockPresent_getPresentResponse,
  TimesheetTimeClockStart_startArgs,
  TimesheetTimeClockStart_startResponse,
  TimesheetTimeClockStop_stopArgs,
  TimesheetTimeClockStop_stopResponse,
  TimesheetWeek_searchArgs,
  TimesheetWeek_searchResponse,
  TimesheetWeekApprove_approveArgs,
  TimesheetWeekApprove_approveResponse,
  TimesheetWeekComplete_completeArgs,
  TimesheetWeekComplete_completeResponse,
  TimesheetWeekReopen_reopenArgs,
  TimesheetWeekReopen_reopenResponse,
  TimesheetWeekUnapprove_unapproveArgs,
  TimesheetWeekUnapprove_unapproveResponse,
  TokenConsumerByToken_getByTokenArgs,
  TokenConsumerByToken_getByTokenResponse,
  TokenEmployeeCreate_createArgs,
  TokenEmployeeCreate_createResponse,
  TokenSession_deleteArgs,
  TokenSession_deleteResponse,
  TokenSessionCreate_createArgs,
  TokenSessionCreate_createResponse,
  TokenSessionCreate_createWithBodyArgs,
  TokenSessionCreate_createWithBodyResponse,
  TokenSessionWhoAmI_whoAmIArgs,
  TokenSessionWhoAmI_whoAmIResponse,
  TransportType_getArgs,
  TransportType_getResponse,
  TransportType_searchArgs,
  TransportType_searchResponse,
  TravelExpense_deleteArgs,
  TravelExpense_deleteResponse,
  TravelExpense_getArgs,
  TravelExpense_getResponse,
  TravelExpense_postArgs,
  TravelExpense_postResponse,
  TravelExpense_putArgs,
  TravelExpense_putResponse,
  TravelExpense_searchArgs,
  TravelExpense_searchResponse,
  TravelExpenseAccommodationAllowance_deleteArgs,
  TravelExpenseAccommodationAllowance_deleteResponse,
  TravelExpenseAccommodationAllowance_getArgs,
  TravelExpenseAccommodationAllowance_getResponse,
  TravelExpenseAccommodationAllowance_postArgs,
  TravelExpenseAccommodationAllowance_postResponse,
  TravelExpenseAccommodationAllowance_putArgs,
  TravelExpenseAccommodationAllowance_putResponse,
  TravelExpenseAccommodationAllowance_searchArgs,
  TravelExpenseAccommodationAllowance_searchResponse,
  TravelExpenseApprove_approveArgs,
  TravelExpenseApprove_approveResponse,
  TravelExpenseAttachment_deleteAttachmentArgs,
  TravelExpenseAttachment_deleteAttachmentResponse,
  TravelExpenseAttachment_downloadAttachmentArgs,
  TravelExpenseAttachment_downloadAttachmentResponse,
  TravelExpenseAttachment_uploadAttachmentArgs,
  TravelExpenseAttachment_uploadAttachmentResponse,
  TravelExpenseAttachmentList_uploadAttachmentsArgs,
  TravelExpenseAttachmentList_uploadAttachmentsResponse,
  TravelExpenseConvert_convertArgs,
  TravelExpenseConvert_convertResponse,
  TravelExpenseCopy_copyArgs,
  TravelExpenseCopy_copyResponse,
  TravelExpenseCost_deleteArgs,
  TravelExpenseCost_deleteResponse,
  TravelExpenseCost_getArgs,
  TravelExpenseCost_getResponse,
  TravelExpenseCost_postArgs,
  TravelExpenseCost_postResponse,
  TravelExpenseCost_putArgs,
  TravelExpenseCost_putResponse,
  TravelExpenseCost_searchArgs,
  TravelExpenseCost_searchResponse,
  TravelExpenseCostCategory_getArgs,
  TravelExpenseCostCategory_getResponse,
  TravelExpenseCostCategory_searchArgs,
  TravelExpenseCostCategory_searchResponse,
  TravelExpenseCostList_putListArgs,
  TravelExpenseCostList_putListResponse,
  TravelExpenseCostParticipant_deleteArgs,
  TravelExpenseCostParticipant_deleteResponse,
  TravelExpenseCostParticipant_getArgs,
  TravelExpenseCostParticipant_getResponse,
  TravelExpenseCostParticipant_postArgs,
  TravelExpenseCostParticipant_postResponse,
  TravelExpenseCostParticipantCostParticipants_getCostParticipantsArgs,
  TravelExpenseCostParticipantCostParticipants_getCostParticipantsResponse,
  TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedArgs,
  TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedResponse,
  TravelExpenseCostParticipantList_deleteListArgs,
  TravelExpenseCostParticipantList_deleteListResponse,
  TravelExpenseCostParticipantList_postListArgs,
  TravelExpenseCostParticipantList_postListResponse,
  TravelExpenseCreateVouchers_createVouchersArgs,
  TravelExpenseCreateVouchers_createVouchersResponse,
  TravelExpenseDeliver_deliverArgs,
  TravelExpenseDeliver_deliverResponse,
  TravelExpenseDrivingStop_deleteArgs,
  TravelExpenseDrivingStop_deleteResponse,
  TravelExpenseDrivingStop_getArgs,
  TravelExpenseDrivingStop_getResponse,
  TravelExpenseDrivingStop_postArgs,
  TravelExpenseDrivingStop_postResponse,
  TravelExpenseMileageAllowance_deleteArgs,
  TravelExpenseMileageAllowance_deleteResponse,
  TravelExpenseMileageAllowance_getArgs,
  TravelExpenseMileageAllowance_getResponse,
  TravelExpenseMileageAllowance_postArgs,
  TravelExpenseMileageAllowance_postResponse,
  TravelExpenseMileageAllowance_putArgs,
  TravelExpenseMileageAllowance_putResponse,
  TravelExpenseMileageAllowance_searchArgs,
  TravelExpenseMileageAllowance_searchResponse,
  TravelExpensePassenger_deleteArgs,
  TravelExpensePassenger_deleteResponse,
  TravelExpensePassenger_getArgs,
  TravelExpensePassenger_getResponse,
  TravelExpensePassenger_postArgs,
  TravelExpensePassenger_postResponse,
  TravelExpensePassenger_putArgs,
  TravelExpensePassenger_putResponse,
  TravelExpensePassenger_searchArgs,
  TravelExpensePassenger_searchResponse,
  TravelExpensePassengerList_deleteListArgs,
  TravelExpensePassengerList_deleteListResponse,
  TravelExpensePassengerList_postListArgs,
  TravelExpensePassengerList_postListResponse,
  TravelExpensePaymentType_getArgs,
  TravelExpensePaymentType_getResponse,
  TravelExpensePaymentType_searchArgs,
  TravelExpensePaymentType_searchResponse,
  TravelExpensePerDiemCompensation_deleteArgs,
  TravelExpensePerDiemCompensation_deleteResponse,
  TravelExpensePerDiemCompensation_getArgs,
  TravelExpensePerDiemCompensation_getResponse,
  TravelExpensePerDiemCompensation_postArgs,
  TravelExpensePerDiemCompensation_postResponse,
  TravelExpensePerDiemCompensation_putArgs,
  TravelExpensePerDiemCompensation_putResponse,
  TravelExpensePerDiemCompensation_searchArgs,
  TravelExpensePerDiemCompensation_searchResponse,
  TravelExpenseRate_getArgs,
  TravelExpenseRate_getResponse,
  TravelExpenseRate_searchArgs,
  TravelExpenseRate_searchResponse,
  TravelExpenseRateCategory_getArgs,
  TravelExpenseRateCategory_getResponse,
  TravelExpenseRateCategory_searchArgs,
  TravelExpenseRateCategory_searchResponse,
  TravelExpenseRateCategoryGroup_getArgs,
  TravelExpenseRateCategoryGroup_getResponse,
  TravelExpenseRateCategoryGroup_searchArgs,
  TravelExpenseRateCategoryGroup_searchResponse,
  TravelExpenseSettings_getArgs,
  TravelExpenseSettings_getResponse,
  TravelExpenseUnapprove_unapproveArgs,
  TravelExpenseUnapprove_unapproveResponse,
  TravelExpenseUndeliver_undeliverArgs,
  TravelExpenseUndeliver_undeliverResponse,
  TravelExpenseZone_getArgs,
  TravelExpenseZone_getResponse,
  TravelExpenseZone_searchArgs,
  TravelExpenseZone_searchResponse,
  UserLicenseExport_exportArgs,
  UserLicenseExport_exportResponse,
  VatReturnsComment_queryArgs,
  VatReturnsComment_queryResponse,
  VatReturnsCommentAll_allArgs,
  VatReturnsCommentAll_allResponse,
  VatTermSizeSettings_deleteArgs,
  VatTermSizeSettings_deleteResponse,
  VatTermSizeSettings_getArgs,
  VatTermSizeSettings_getResponse,
  VatTermSizeSettings_postArgs,
  VatTermSizeSettings_postResponse,
  VatTermSizeSettings_putArgs,
  VatTermSizeSettings_putResponse,
  VatTermSizeSettings_queryArgs,
  VatTermSizeSettings_queryResponse,
  VoucherApprovalListElement_getArgs,
  VoucherApprovalListElement_getResponse,
  VoucherInboxEmailAddress_getEmailAddressArgs,
  VoucherInboxEmailAddress_getEmailAddressResponse,
  VoucherInboxInboxCount_getInboxCountArgs,
  VoucherInboxInboxCount_getInboxCountResponse,
  VoucherMessage_postArgs,
  VoucherMessage_postResponse,
  VoucherMessage_searchArgs,
  VoucherMessage_searchResponse,
  VoucherStatus_getArgs,
  VoucherStatus_getResponse,
  VoucherStatus_postArgs,
  VoucherStatus_postResponse,
  VoucherStatus_searchArgs,
  VoucherStatus_searchResponse,
  YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesArgs,
  YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesResponse,
  YearEndPenneoCasefiles_createCaseFileArgs,
  YearEndPenneoCasefiles_createCaseFileResponse,
  YearEndPenneoCasefiles_deleteCaseFileArgs,
  YearEndPenneoCasefiles_deleteCaseFileResponse,
  YearEndPenneoCasefiles_getCaseFilesArgs,
  YearEndPenneoCasefiles_getCaseFilesResponse,
  YearEndPenneoCasefilesActivate_activateCaseFileArgs,
  YearEndPenneoCasefilesActivate_activateCaseFileResponse,
  YearEndPenneoCasefilesSigners_deleteSignerArgs,
  YearEndPenneoCasefilesSigners_deleteSignerResponse,
  YearEndPenneoCasefilesSignersReactivate_reactivateSignerArgs,
  YearEndPenneoCasefilesSignersReactivate_reactivateSignerResponse,
  YearEndPenneoCasefilesSignersResend_resendSignLinkArgs,
  YearEndPenneoCasefilesSignersResend_resendSignLinkResponse,
  YearEndPenneoDocuments_createDocumentArgs,
  YearEndPenneoDocuments_createDocumentResponse,
  YearEndPenneoDocuments_deleteDocumentArgs,
  YearEndPenneoDocuments_deleteDocumentResponse,
  YearEndPenneoDocuments_updateDocumentArgs,
  YearEndPenneoDocuments_updateDocumentResponse,
  YearEndPenneoDocumentsDownload_downloadDocumentArgs,
  YearEndPenneoDocumentsDownload_downloadDocumentResponse,
  YearEndPenneoRecipients_deleteRecipientsArgs,
  YearEndPenneoRecipients_deleteRecipientsResponse,
  YearEndPenneoRecipients_getRecipientsArgs,
  YearEndPenneoRecipients_getRecipientsResponse,
  YearEndPenneoRecipients_postRecipientsArgs,
  YearEndPenneoRecipients_postRecipientsResponse,
  YearEndPenneoSession_authenticateAndListCaseFilesArgs,
  YearEndPenneoSession_authenticateAndListCaseFilesResponse,
  YearEndPenneoSignature_lines_createAndLinkSignatureLineArgs,
  YearEndPenneoSignature_lines_createAndLinkSignatureLineResponse,
  YearEndPenneoSync_syncArgs,
  YearEndPenneoSync_syncResponse,
  YearEndPenneoUpdateCompletedStatus_updateCompletedStatusArgs,
  YearEndPenneoUpdateCompletedStatus_updateCompletedStatusResponse,
  YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Args,
  YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Response,
  YearEndResearchAndDevelopment2024_getArgs,
  YearEndResearchAndDevelopment2024_getResponse,
  YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Args,
  YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Response,
  YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Args,
  YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Response,
} from './operations';

export interface GeneratedResourceConstructors {
  accountantDashboard: AccountantDashboardResource;
  accountingOffice: AccountingOfficeResource;
  activity: ActivityResource;
  asset: AssetResource;
  attestation: AttestationResource;
  balance: BalanceResource;
  balanceSheet: BalanceSheetResource;
  bank: BankResource;
  company: CompanyResource;
  contact: ContactResource;
  country: CountryResource;
  crm: CrmResource;
  currency: CurrencyResource;
  customer: CustomerResource;
  deliveryAddress: DeliveryAddressResource;
  department: DepartmentResource;
  division: DivisionResource;
  document: DocumentResource;
  documentArchive: DocumentArchiveResource;
  employee: EmployeeResource;
  event: EventResource;
  incomingInvoice: IncomingInvoiceResource;
  internal: InternalResource;
  inventory: InventoryResource;
  invoice: InvoiceResource;
  invoiceRemark: InvoiceRemarkResource;
  ledger: LedgerResource;
  municipality: MunicipalityResource;
  order: OrderResource;
  pension: PensionResource;
  pickupPoint: PickupPointResource;
  platformAgnostic: PlatformAgnosticResource;
  product: ProductResource;
  project: ProjectResource;
  purchaseOrder: PurchaseOrderResource;
  reminder: ReminderResource;
  resultbudget: ResultbudgetResource;
  saft: SaftResource;
  salary: SalaryResource;
  subscription: SubscriptionResource;
  supplier: SupplierResource;
  supplierCustomer: SupplierCustomerResource;
  supplierInvoice: SupplierInvoiceResource;
  supportDashboard: SupportDashboardResource;
  timesheet: TimesheetResource;
  token: TokenResource;
  transportType: TransportTypeResource;
  travelExpense: TravelExpenseResource;
  userLicense: UserLicenseResource;
  vatReturns: VatReturnsResource;
  vatTermSizeSettings: VatTermSizeSettingsResource;
  voucherApprovalListElement: VoucherApprovalListElementResource;
  voucherInbox: VoucherInboxResource;
  voucherMessage: VoucherMessageResource;
  voucherStatus: VoucherStatusResource;
  yearEnd: YearEndResource;
}

export class AccountantDashboardResource extends BaseClient {
  AccountantDashboardNews_get(args: AccountantDashboardNews_getArgs = {}): Promise<AccountantDashboardNews_getResponse> {
    return this.callOperation<AccountantDashboardNews_getResponse>(OPERATION_DEFINITIONS.AccountantDashboardNews_get, args);
  }

  AccountantDashboardNews_getWithMeta(args: AccountantDashboardNews_getArgs = {}): Promise<ApiResult<AccountantDashboardNews_getResponse>> {
    return this.callOperationWithMeta<AccountantDashboardNews_getResponse>(OPERATION_DEFINITIONS.AccountantDashboardNews_get, args);
  }

  AccountantDashboardNewsTags_getTags(args: AccountantDashboardNewsTags_getTagsArgs = {}): Promise<AccountantDashboardNewsTags_getTagsResponse> {
    return this.callOperation<AccountantDashboardNewsTags_getTagsResponse>(OPERATION_DEFINITIONS.AccountantDashboardNewsTags_getTags, args);
  }

  AccountantDashboardNewsTags_getTagsWithMeta(args: AccountantDashboardNewsTags_getTagsArgs = {}): Promise<ApiResult<AccountantDashboardNewsTags_getTagsResponse>> {
    return this.callOperationWithMeta<AccountantDashboardNewsTags_getTagsResponse>(OPERATION_DEFINITIONS.AccountantDashboardNewsTags_getTags, args);
  }

}

export class AccountingOfficeResource extends BaseClient {
  AccountingOfficeReconciliationsControl_get(args: AccountingOfficeReconciliationsControl_getArgs): Promise<AccountingOfficeReconciliationsControl_getResponse> {
    return this.callOperation<AccountingOfficeReconciliationsControl_getResponse>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControl_get, args);
  }

  AccountingOfficeReconciliationsControl_getWithMeta(args: AccountingOfficeReconciliationsControl_getArgs): Promise<ApiResult<AccountingOfficeReconciliationsControl_getResponse>> {
    return this.callOperationWithMeta<AccountingOfficeReconciliationsControl_getResponse>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControl_get, args);
  }

  AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation(args: AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationArgs): Promise<AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationResponse> {
    return this.callOperation<AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationResponse>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation, args);
  }

  AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationWithMeta(args: AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationArgs): Promise<ApiResult<AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationResponse>> {
    return this.callOperationWithMeta<AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationResponse>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation, args);
  }

  AccountingOfficeReconciliationsControlReconcile_reconcile(args: AccountingOfficeReconciliationsControlReconcile_reconcileArgs): Promise<AccountingOfficeReconciliationsControlReconcile_reconcileResponse> {
    return this.callOperation<AccountingOfficeReconciliationsControlReconcile_reconcileResponse>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlReconcile_reconcile, args);
  }

  AccountingOfficeReconciliationsControlReconcile_reconcileWithMeta(args: AccountingOfficeReconciliationsControlReconcile_reconcileArgs): Promise<ApiResult<AccountingOfficeReconciliationsControlReconcile_reconcileResponse>> {
    return this.callOperationWithMeta<AccountingOfficeReconciliationsControlReconcile_reconcileResponse>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlReconcile_reconcile, args);
  }

  AccountingOfficeReconciliationsControlRequestControl_requestControl(args: AccountingOfficeReconciliationsControlRequestControl_requestControlArgs): Promise<AccountingOfficeReconciliationsControlRequestControl_requestControlResponse> {
    return this.callOperation<AccountingOfficeReconciliationsControlRequestControl_requestControlResponse>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlRequestControl_requestControl, args);
  }

  AccountingOfficeReconciliationsControlRequestControl_requestControlWithMeta(args: AccountingOfficeReconciliationsControlRequestControl_requestControlArgs): Promise<ApiResult<AccountingOfficeReconciliationsControlRequestControl_requestControlResponse>> {
    return this.callOperationWithMeta<AccountingOfficeReconciliationsControlRequestControl_requestControlResponse>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlRequestControl_requestControl, args);
  }

}

export class ActivityResource extends BaseClient {
  Activity_get(args: Activity_getArgs): Promise<Activity_getResponse> {
    return this.callOperation<Activity_getResponse>(OPERATION_DEFINITIONS.Activity_get, args);
  }

  Activity_getWithMeta(args: Activity_getArgs): Promise<ApiResult<Activity_getResponse>> {
    return this.callOperationWithMeta<Activity_getResponse>(OPERATION_DEFINITIONS.Activity_get, args);
  }

  Activity_post(args: Activity_postArgs): Promise<Activity_postResponse> {
    return this.callOperation<Activity_postResponse>(OPERATION_DEFINITIONS.Activity_post, args);
  }

  Activity_postWithMeta(args: Activity_postArgs): Promise<ApiResult<Activity_postResponse>> {
    return this.callOperationWithMeta<Activity_postResponse>(OPERATION_DEFINITIONS.Activity_post, args);
  }

  Activity_search(args: Activity_searchArgs = {}): Promise<Activity_searchResponse> {
    return this.callOperation<Activity_searchResponse>(OPERATION_DEFINITIONS.Activity_search, args);
  }

  Activity_searchWithMeta(args: Activity_searchArgs = {}): Promise<ApiResult<Activity_searchResponse>> {
    return this.callOperationWithMeta<Activity_searchResponse>(OPERATION_DEFINITIONS.Activity_search, args);
  }

  ActivityForTimeSheet_getForTimeSheet(args: ActivityForTimeSheet_getForTimeSheetArgs = {}): Promise<ActivityForTimeSheet_getForTimeSheetResponse> {
    return this.callOperation<ActivityForTimeSheet_getForTimeSheetResponse>(OPERATION_DEFINITIONS.ActivityForTimeSheet_getForTimeSheet, args);
  }

  ActivityForTimeSheet_getForTimeSheetWithMeta(args: ActivityForTimeSheet_getForTimeSheetArgs = {}): Promise<ApiResult<ActivityForTimeSheet_getForTimeSheetResponse>> {
    return this.callOperationWithMeta<ActivityForTimeSheet_getForTimeSheetResponse>(OPERATION_DEFINITIONS.ActivityForTimeSheet_getForTimeSheet, args);
  }

  ActivityList_postList(args: ActivityList_postListArgs): Promise<ActivityList_postListResponse> {
    return this.callOperation<ActivityList_postListResponse>(OPERATION_DEFINITIONS.ActivityList_postList, args);
  }

  ActivityList_postListWithMeta(args: ActivityList_postListArgs): Promise<ApiResult<ActivityList_postListResponse>> {
    return this.callOperationWithMeta<ActivityList_postListResponse>(OPERATION_DEFINITIONS.ActivityList_postList, args);
  }

}

export class AssetResource extends BaseClient {
  Asset_delete(args: Asset_deleteArgs): Promise<Asset_deleteResponse> {
    return this.callOperation<Asset_deleteResponse>(OPERATION_DEFINITIONS.Asset_delete, args);
  }

  Asset_deleteWithMeta(args: Asset_deleteArgs): Promise<ApiResult<Asset_deleteResponse>> {
    return this.callOperationWithMeta<Asset_deleteResponse>(OPERATION_DEFINITIONS.Asset_delete, args);
  }

  Asset_get(args: Asset_getArgs): Promise<Asset_getResponse> {
    return this.callOperation<Asset_getResponse>(OPERATION_DEFINITIONS.Asset_get, args);
  }

  Asset_getWithMeta(args: Asset_getArgs): Promise<ApiResult<Asset_getResponse>> {
    return this.callOperationWithMeta<Asset_getResponse>(OPERATION_DEFINITIONS.Asset_get, args);
  }

  Asset_post(args: Asset_postArgs): Promise<Asset_postResponse> {
    return this.callOperation<Asset_postResponse>(OPERATION_DEFINITIONS.Asset_post, args);
  }

  Asset_postWithMeta(args: Asset_postArgs): Promise<ApiResult<Asset_postResponse>> {
    return this.callOperationWithMeta<Asset_postResponse>(OPERATION_DEFINITIONS.Asset_post, args);
  }

  Asset_put(args: Asset_putArgs): Promise<Asset_putResponse> {
    return this.callOperation<Asset_putResponse>(OPERATION_DEFINITIONS.Asset_put, args);
  }

  Asset_putWithMeta(args: Asset_putArgs): Promise<ApiResult<Asset_putResponse>> {
    return this.callOperationWithMeta<Asset_putResponse>(OPERATION_DEFINITIONS.Asset_put, args);
  }

  Asset_search(args: Asset_searchArgs = {}): Promise<Asset_searchResponse> {
    return this.callOperation<Asset_searchResponse>(OPERATION_DEFINITIONS.Asset_search, args);
  }

  Asset_searchWithMeta(args: Asset_searchArgs = {}): Promise<ApiResult<Asset_searchResponse>> {
    return this.callOperationWithMeta<Asset_searchResponse>(OPERATION_DEFINITIONS.Asset_search, args);
  }

  AssetAssetsExist_getAssetsExist(args: AssetAssetsExist_getAssetsExistArgs = {}): Promise<AssetAssetsExist_getAssetsExistResponse> {
    return this.callOperation<AssetAssetsExist_getAssetsExistResponse>(OPERATION_DEFINITIONS.AssetAssetsExist_getAssetsExist, args);
  }

  AssetAssetsExist_getAssetsExistWithMeta(args: AssetAssetsExist_getAssetsExistArgs = {}): Promise<ApiResult<AssetAssetsExist_getAssetsExistResponse>> {
    return this.callOperationWithMeta<AssetAssetsExist_getAssetsExistResponse>(OPERATION_DEFINITIONS.AssetAssetsExist_getAssetsExist, args);
  }

  AssetBalanceAccountsSum_balanceAccountsSum(args: AssetBalanceAccountsSum_balanceAccountsSumArgs = {}): Promise<AssetBalanceAccountsSum_balanceAccountsSumResponse> {
    return this.callOperation<AssetBalanceAccountsSum_balanceAccountsSumResponse>(OPERATION_DEFINITIONS.AssetBalanceAccountsSum_balanceAccountsSum, args);
  }

  AssetBalanceAccountsSum_balanceAccountsSumWithMeta(args: AssetBalanceAccountsSum_balanceAccountsSumArgs = {}): Promise<ApiResult<AssetBalanceAccountsSum_balanceAccountsSumResponse>> {
    return this.callOperationWithMeta<AssetBalanceAccountsSum_balanceAccountsSumResponse>(OPERATION_DEFINITIONS.AssetBalanceAccountsSum_balanceAccountsSum, args);
  }

  AssetCanDelete_canDelete(args: AssetCanDelete_canDeleteArgs): Promise<AssetCanDelete_canDeleteResponse> {
    return this.callOperation<AssetCanDelete_canDeleteResponse>(OPERATION_DEFINITIONS.AssetCanDelete_canDelete, args);
  }

  AssetCanDelete_canDeleteWithMeta(args: AssetCanDelete_canDeleteArgs): Promise<ApiResult<AssetCanDelete_canDeleteResponse>> {
    return this.callOperationWithMeta<AssetCanDelete_canDeleteResponse>(OPERATION_DEFINITIONS.AssetCanDelete_canDelete, args);
  }

  AssetDeleteImport_deleteImport(args: AssetDeleteImport_deleteImportArgs = {}): Promise<AssetDeleteImport_deleteImportResponse> {
    return this.callOperation<AssetDeleteImport_deleteImportResponse>(OPERATION_DEFINITIONS.AssetDeleteImport_deleteImport, args);
  }

  AssetDeleteImport_deleteImportWithMeta(args: AssetDeleteImport_deleteImportArgs = {}): Promise<ApiResult<AssetDeleteImport_deleteImportResponse>> {
    return this.callOperationWithMeta<AssetDeleteImport_deleteImportResponse>(OPERATION_DEFINITIONS.AssetDeleteImport_deleteImport, args);
  }

  AssetDeleteStartingBalance_deleteStartingBalance(args: AssetDeleteStartingBalance_deleteStartingBalanceArgs = {}): Promise<AssetDeleteStartingBalance_deleteStartingBalanceResponse> {
    return this.callOperation<AssetDeleteStartingBalance_deleteStartingBalanceResponse>(OPERATION_DEFINITIONS.AssetDeleteStartingBalance_deleteStartingBalance, args);
  }

  AssetDeleteStartingBalance_deleteStartingBalanceWithMeta(args: AssetDeleteStartingBalance_deleteStartingBalanceArgs = {}): Promise<ApiResult<AssetDeleteStartingBalance_deleteStartingBalanceResponse>> {
    return this.callOperationWithMeta<AssetDeleteStartingBalance_deleteStartingBalanceResponse>(OPERATION_DEFINITIONS.AssetDeleteStartingBalance_deleteStartingBalance, args);
  }

  AssetDuplicate_postDuplicate(args: AssetDuplicate_postDuplicateArgs): Promise<AssetDuplicate_postDuplicateResponse> {
    return this.callOperation<AssetDuplicate_postDuplicateResponse>(OPERATION_DEFINITIONS.AssetDuplicate_postDuplicate, args);
  }

  AssetDuplicate_postDuplicateWithMeta(args: AssetDuplicate_postDuplicateArgs): Promise<ApiResult<AssetDuplicate_postDuplicateResponse>> {
    return this.callOperationWithMeta<AssetDuplicate_postDuplicateResponse>(OPERATION_DEFINITIONS.AssetDuplicate_postDuplicate, args);
  }

  AssetList_postList(args: AssetList_postListArgs): Promise<AssetList_postListResponse> {
    return this.callOperation<AssetList_postListResponse>(OPERATION_DEFINITIONS.AssetList_postList, args);
  }

  AssetList_postListWithMeta(args: AssetList_postListArgs): Promise<ApiResult<AssetList_postListResponse>> {
    return this.callOperationWithMeta<AssetList_postListResponse>(OPERATION_DEFINITIONS.AssetList_postList, args);
  }

  AssetPostings_getPostings(args: AssetPostings_getPostingsArgs): Promise<AssetPostings_getPostingsResponse> {
    return this.callOperation<AssetPostings_getPostingsResponse>(OPERATION_DEFINITIONS.AssetPostings_getPostings, args);
  }

  AssetPostings_getPostingsWithMeta(args: AssetPostings_getPostingsArgs): Promise<ApiResult<AssetPostings_getPostingsResponse>> {
    return this.callOperationWithMeta<AssetPostings_getPostingsResponse>(OPERATION_DEFINITIONS.AssetPostings_getPostings, args);
  }

  AssetUpload_upload(args: AssetUpload_uploadArgs = {}): Promise<AssetUpload_uploadResponse> {
    return this.callOperation<AssetUpload_uploadResponse>(OPERATION_DEFINITIONS.AssetUpload_upload, args);
  }

  AssetUpload_uploadWithMeta(args: AssetUpload_uploadArgs = {}): Promise<ApiResult<AssetUpload_uploadResponse>> {
    return this.callOperationWithMeta<AssetUpload_uploadResponse>(OPERATION_DEFINITIONS.AssetUpload_upload, args);
  }

}

export class AttestationResource extends BaseClient {
  AttestationAddApprover_addApprover(args: AttestationAddApprover_addApproverArgs): Promise<AttestationAddApprover_addApproverResponse> {
    return this.callOperation<AttestationAddApprover_addApproverResponse>(OPERATION_DEFINITIONS.AttestationAddApprover_addApprover, args);
  }

  AttestationAddApprover_addApproverWithMeta(args: AttestationAddApprover_addApproverArgs): Promise<ApiResult<AttestationAddApprover_addApproverResponse>> {
    return this.callOperationWithMeta<AttestationAddApprover_addApproverResponse>(OPERATION_DEFINITIONS.AttestationAddApprover_addApprover, args);
  }

  AttestationAddApproverPermission_addApproverPermission(args: AttestationAddApproverPermission_addApproverPermissionArgs = {}): Promise<AttestationAddApproverPermission_addApproverPermissionResponse> {
    return this.callOperation<AttestationAddApproverPermission_addApproverPermissionResponse>(OPERATION_DEFINITIONS.AttestationAddApproverPermission_addApproverPermission, args);
  }

  AttestationAddApproverPermission_addApproverPermissionWithMeta(args: AttestationAddApproverPermission_addApproverPermissionArgs = {}): Promise<ApiResult<AttestationAddApproverPermission_addApproverPermissionResponse>> {
    return this.callOperationWithMeta<AttestationAddApproverPermission_addApproverPermissionResponse>(OPERATION_DEFINITIONS.AttestationAddApproverPermission_addApproverPermission, args);
  }

  AttestationCompanyModules_get(args: AttestationCompanyModules_getArgs = {}): Promise<AttestationCompanyModules_getResponse> {
    return this.callOperation<AttestationCompanyModules_getResponse>(OPERATION_DEFINITIONS.AttestationCompanyModules_get, args);
  }

  AttestationCompanyModules_getWithMeta(args: AttestationCompanyModules_getArgs = {}): Promise<ApiResult<AttestationCompanyModules_getResponse>> {
    return this.callOperationWithMeta<AttestationCompanyModules_getResponse>(OPERATION_DEFINITIONS.AttestationCompanyModules_get, args);
  }

}

export class BalanceResource extends BaseClient {
  BalanceReconciliationAccountVouchers_getVouchers(args: BalanceReconciliationAccountVouchers_getVouchersArgs): Promise<BalanceReconciliationAccountVouchers_getVouchersResponse> {
    return this.callOperation<BalanceReconciliationAccountVouchers_getVouchersResponse>(OPERATION_DEFINITIONS.BalanceReconciliationAccountVouchers_getVouchers, args);
  }

  BalanceReconciliationAccountVouchers_getVouchersWithMeta(args: BalanceReconciliationAccountVouchers_getVouchersArgs): Promise<ApiResult<BalanceReconciliationAccountVouchers_getVouchersResponse>> {
    return this.callOperationWithMeta<BalanceReconciliationAccountVouchers_getVouchersResponse>(OPERATION_DEFINITIONS.BalanceReconciliationAccountVouchers_getVouchers, args);
  }

  BalanceReconciliationAnnualContext_postAnnualContext(args: BalanceReconciliationAnnualContext_postAnnualContextArgs): Promise<BalanceReconciliationAnnualContext_postAnnualContextResponse> {
    return this.callOperation<BalanceReconciliationAnnualContext_postAnnualContextResponse>(OPERATION_DEFINITIONS.BalanceReconciliationAnnualContext_postAnnualContext, args);
  }

  BalanceReconciliationAnnualContext_postAnnualContextWithMeta(args: BalanceReconciliationAnnualContext_postAnnualContextArgs): Promise<ApiResult<BalanceReconciliationAnnualContext_postAnnualContextResponse>> {
    return this.callOperationWithMeta<BalanceReconciliationAnnualContext_postAnnualContextResponse>(OPERATION_DEFINITIONS.BalanceReconciliationAnnualContext_postAnnualContext, args);
  }

  BalanceReconciliationAttachmentPdf_getAttachment(args: BalanceReconciliationAttachmentPdf_getAttachmentArgs): Promise<BalanceReconciliationAttachmentPdf_getAttachmentResponse> {
    return this.callOperation<BalanceReconciliationAttachmentPdf_getAttachmentResponse>(OPERATION_DEFINITIONS.BalanceReconciliationAttachmentPdf_getAttachment, args);
  }

  BalanceReconciliationAttachmentPdf_getAttachmentWithMeta(args: BalanceReconciliationAttachmentPdf_getAttachmentArgs): Promise<ApiResult<BalanceReconciliationAttachmentPdf_getAttachmentResponse>> {
    return this.callOperationWithMeta<BalanceReconciliationAttachmentPdf_getAttachmentResponse>(OPERATION_DEFINITIONS.BalanceReconciliationAttachmentPdf_getAttachment, args);
  }

}

export class BalanceSheetResource extends BaseClient {
  BalanceSheet_search(args: BalanceSheet_searchArgs = {}): Promise<BalanceSheet_searchResponse> {
    return this.callOperation<BalanceSheet_searchResponse>(OPERATION_DEFINITIONS.BalanceSheet_search, args);
  }

  BalanceSheet_searchWithMeta(args: BalanceSheet_searchArgs = {}): Promise<ApiResult<BalanceSheet_searchResponse>> {
    return this.callOperationWithMeta<BalanceSheet_searchResponse>(OPERATION_DEFINITIONS.BalanceSheet_search, args);
  }

}

export class BankResource extends BaseClient {
  Bank_get(args: Bank_getArgs): Promise<Bank_getResponse> {
    return this.callOperation<Bank_getResponse>(OPERATION_DEFINITIONS.Bank_get, args);
  }

  Bank_getWithMeta(args: Bank_getArgs): Promise<ApiResult<Bank_getResponse>> {
    return this.callOperationWithMeta<Bank_getResponse>(OPERATION_DEFINITIONS.Bank_get, args);
  }

  Bank_search(args: Bank_searchArgs = {}): Promise<Bank_searchResponse> {
    return this.callOperation<Bank_searchResponse>(OPERATION_DEFINITIONS.Bank_search, args);
  }

  Bank_searchWithMeta(args: Bank_searchArgs = {}): Promise<ApiResult<Bank_searchResponse>> {
    return this.callOperationWithMeta<Bank_searchResponse>(OPERATION_DEFINITIONS.Bank_search, args);
  }

  BankReconciliation_delete(args: BankReconciliation_deleteArgs): Promise<BankReconciliation_deleteResponse> {
    return this.callOperation<BankReconciliation_deleteResponse>(OPERATION_DEFINITIONS.BankReconciliation_delete, args);
  }

  BankReconciliation_deleteWithMeta(args: BankReconciliation_deleteArgs): Promise<ApiResult<BankReconciliation_deleteResponse>> {
    return this.callOperationWithMeta<BankReconciliation_deleteResponse>(OPERATION_DEFINITIONS.BankReconciliation_delete, args);
  }

  BankReconciliation_get(args: BankReconciliation_getArgs): Promise<BankReconciliation_getResponse> {
    return this.callOperation<BankReconciliation_getResponse>(OPERATION_DEFINITIONS.BankReconciliation_get, args);
  }

  BankReconciliation_getWithMeta(args: BankReconciliation_getArgs): Promise<ApiResult<BankReconciliation_getResponse>> {
    return this.callOperationWithMeta<BankReconciliation_getResponse>(OPERATION_DEFINITIONS.BankReconciliation_get, args);
  }

  BankReconciliation_post(args: BankReconciliation_postArgs): Promise<BankReconciliation_postResponse> {
    return this.callOperation<BankReconciliation_postResponse>(OPERATION_DEFINITIONS.BankReconciliation_post, args);
  }

  BankReconciliation_postWithMeta(args: BankReconciliation_postArgs): Promise<ApiResult<BankReconciliation_postResponse>> {
    return this.callOperationWithMeta<BankReconciliation_postResponse>(OPERATION_DEFINITIONS.BankReconciliation_post, args);
  }

  BankReconciliation_put(args: BankReconciliation_putArgs): Promise<BankReconciliation_putResponse> {
    return this.callOperation<BankReconciliation_putResponse>(OPERATION_DEFINITIONS.BankReconciliation_put, args);
  }

  BankReconciliation_putWithMeta(args: BankReconciliation_putArgs): Promise<ApiResult<BankReconciliation_putResponse>> {
    return this.callOperationWithMeta<BankReconciliation_putResponse>(OPERATION_DEFINITIONS.BankReconciliation_put, args);
  }

  BankReconciliation_search(args: BankReconciliation_searchArgs = {}): Promise<BankReconciliation_searchResponse> {
    return this.callOperation<BankReconciliation_searchResponse>(OPERATION_DEFINITIONS.BankReconciliation_search, args);
  }

  BankReconciliation_searchWithMeta(args: BankReconciliation_searchArgs = {}): Promise<ApiResult<BankReconciliation_searchResponse>> {
    return this.callOperationWithMeta<BankReconciliation_searchResponse>(OPERATION_DEFINITIONS.BankReconciliation_search, args);
  }

  BankReconciliationAdjustment_adjustment(args: BankReconciliationAdjustment_adjustmentArgs): Promise<BankReconciliationAdjustment_adjustmentResponse> {
    return this.callOperation<BankReconciliationAdjustment_adjustmentResponse>(OPERATION_DEFINITIONS.BankReconciliationAdjustment_adjustment, args);
  }

  BankReconciliationAdjustment_adjustmentWithMeta(args: BankReconciliationAdjustment_adjustmentArgs): Promise<ApiResult<BankReconciliationAdjustment_adjustmentResponse>> {
    return this.callOperationWithMeta<BankReconciliationAdjustment_adjustmentResponse>(OPERATION_DEFINITIONS.BankReconciliationAdjustment_adjustment, args);
  }

  BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions(args: BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsArgs = {}): Promise<BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsResponse> {
    return this.callOperation<BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsResponse>(OPERATION_DEFINITIONS.BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions, args);
  }

  BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsWithMeta(args: BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsArgs = {}): Promise<ApiResult<BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsResponse>> {
    return this.callOperationWithMeta<BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsResponse>(OPERATION_DEFINITIONS.BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions, args);
  }

  BankReconciliationLast_last(args: BankReconciliationLast_lastArgs = {}): Promise<BankReconciliationLast_lastResponse> {
    return this.callOperation<BankReconciliationLast_lastResponse>(OPERATION_DEFINITIONS.BankReconciliationLast_last, args);
  }

  BankReconciliationLast_lastWithMeta(args: BankReconciliationLast_lastArgs = {}): Promise<ApiResult<BankReconciliationLast_lastResponse>> {
    return this.callOperationWithMeta<BankReconciliationLast_lastResponse>(OPERATION_DEFINITIONS.BankReconciliationLast_last, args);
  }

  BankReconciliationLastClosed_lastClosed(args: BankReconciliationLastClosed_lastClosedArgs = {}): Promise<BankReconciliationLastClosed_lastClosedResponse> {
    return this.callOperation<BankReconciliationLastClosed_lastClosedResponse>(OPERATION_DEFINITIONS.BankReconciliationLastClosed_lastClosed, args);
  }

  BankReconciliationLastClosed_lastClosedWithMeta(args: BankReconciliationLastClosed_lastClosedArgs = {}): Promise<ApiResult<BankReconciliationLastClosed_lastClosedResponse>> {
    return this.callOperationWithMeta<BankReconciliationLastClosed_lastClosedResponse>(OPERATION_DEFINITIONS.BankReconciliationLastClosed_lastClosed, args);
  }

  BankReconciliationMatch_delete(args: BankReconciliationMatch_deleteArgs): Promise<BankReconciliationMatch_deleteResponse> {
    return this.callOperation<BankReconciliationMatch_deleteResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_delete, args);
  }

  BankReconciliationMatch_deleteWithMeta(args: BankReconciliationMatch_deleteArgs): Promise<ApiResult<BankReconciliationMatch_deleteResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatch_deleteResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_delete, args);
  }

  BankReconciliationMatch_get(args: BankReconciliationMatch_getArgs): Promise<BankReconciliationMatch_getResponse> {
    return this.callOperation<BankReconciliationMatch_getResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_get, args);
  }

  BankReconciliationMatch_getWithMeta(args: BankReconciliationMatch_getArgs): Promise<ApiResult<BankReconciliationMatch_getResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatch_getResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_get, args);
  }

  BankReconciliationMatch_post(args: BankReconciliationMatch_postArgs): Promise<BankReconciliationMatch_postResponse> {
    return this.callOperation<BankReconciliationMatch_postResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_post, args);
  }

  BankReconciliationMatch_postWithMeta(args: BankReconciliationMatch_postArgs): Promise<ApiResult<BankReconciliationMatch_postResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatch_postResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_post, args);
  }

  BankReconciliationMatch_put(args: BankReconciliationMatch_putArgs): Promise<BankReconciliationMatch_putResponse> {
    return this.callOperation<BankReconciliationMatch_putResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_put, args);
  }

  BankReconciliationMatch_putWithMeta(args: BankReconciliationMatch_putArgs): Promise<ApiResult<BankReconciliationMatch_putResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatch_putResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_put, args);
  }

  BankReconciliationMatch_search(args: BankReconciliationMatch_searchArgs = {}): Promise<BankReconciliationMatch_searchResponse> {
    return this.callOperation<BankReconciliationMatch_searchResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_search, args);
  }

  BankReconciliationMatch_searchWithMeta(args: BankReconciliationMatch_searchArgs = {}): Promise<ApiResult<BankReconciliationMatch_searchResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatch_searchResponse>(OPERATION_DEFINITIONS.BankReconciliationMatch_search, args);
  }

  BankReconciliationMatchCount_count(args: BankReconciliationMatchCount_countArgs = {}): Promise<BankReconciliationMatchCount_countResponse> {
    return this.callOperation<BankReconciliationMatchCount_countResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchCount_count, args);
  }

  BankReconciliationMatchCount_countWithMeta(args: BankReconciliationMatchCount_countArgs = {}): Promise<ApiResult<BankReconciliationMatchCount_countResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatchCount_countResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchCount_count, args);
  }

  BankReconciliationMatchesCounter_get(args: BankReconciliationMatchesCounter_getArgs = {}): Promise<BankReconciliationMatchesCounter_getResponse> {
    return this.callOperation<BankReconciliationMatchesCounter_getResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchesCounter_get, args);
  }

  BankReconciliationMatchesCounter_getWithMeta(args: BankReconciliationMatchesCounter_getArgs = {}): Promise<ApiResult<BankReconciliationMatchesCounter_getResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatchesCounter_getResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchesCounter_get, args);
  }

  BankReconciliationMatchesCounter_post(args: BankReconciliationMatchesCounter_postArgs = {}): Promise<BankReconciliationMatchesCounter_postResponse> {
    return this.callOperation<BankReconciliationMatchesCounter_postResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchesCounter_post, args);
  }

  BankReconciliationMatchesCounter_postWithMeta(args: BankReconciliationMatchesCounter_postArgs = {}): Promise<ApiResult<BankReconciliationMatchesCounter_postResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatchesCounter_postResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchesCounter_post, args);
  }

  BankReconciliationMatchQuery_query(args: BankReconciliationMatchQuery_queryArgs = {}): Promise<BankReconciliationMatchQuery_queryResponse> {
    return this.callOperation<BankReconciliationMatchQuery_queryResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchQuery_query, args);
  }

  BankReconciliationMatchQuery_queryWithMeta(args: BankReconciliationMatchQuery_queryArgs = {}): Promise<ApiResult<BankReconciliationMatchQuery_queryResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatchQuery_queryResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchQuery_query, args);
  }

  BankReconciliationMatchSuggest_suggest(args: BankReconciliationMatchSuggest_suggestArgs = {}): Promise<BankReconciliationMatchSuggest_suggestResponse> {
    return this.callOperation<BankReconciliationMatchSuggest_suggestResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchSuggest_suggest, args);
  }

  BankReconciliationMatchSuggest_suggestWithMeta(args: BankReconciliationMatchSuggest_suggestArgs = {}): Promise<ApiResult<BankReconciliationMatchSuggest_suggestResponse>> {
    return this.callOperationWithMeta<BankReconciliationMatchSuggest_suggestResponse>(OPERATION_DEFINITIONS.BankReconciliationMatchSuggest_suggest, args);
  }

  BankReconciliationPaymentType_get(args: BankReconciliationPaymentType_getArgs): Promise<BankReconciliationPaymentType_getResponse> {
    return this.callOperation<BankReconciliationPaymentType_getResponse>(OPERATION_DEFINITIONS.BankReconciliationPaymentType_get, args);
  }

  BankReconciliationPaymentType_getWithMeta(args: BankReconciliationPaymentType_getArgs): Promise<ApiResult<BankReconciliationPaymentType_getResponse>> {
    return this.callOperationWithMeta<BankReconciliationPaymentType_getResponse>(OPERATION_DEFINITIONS.BankReconciliationPaymentType_get, args);
  }

  BankReconciliationPaymentType_search(args: BankReconciliationPaymentType_searchArgs = {}): Promise<BankReconciliationPaymentType_searchResponse> {
    return this.callOperation<BankReconciliationPaymentType_searchResponse>(OPERATION_DEFINITIONS.BankReconciliationPaymentType_search, args);
  }

  BankReconciliationPaymentType_searchWithMeta(args: BankReconciliationPaymentType_searchArgs = {}): Promise<ApiResult<BankReconciliationPaymentType_searchResponse>> {
    return this.callOperationWithMeta<BankReconciliationPaymentType_searchResponse>(OPERATION_DEFINITIONS.BankReconciliationPaymentType_search, args);
  }

  BankReconciliationSettings_get(args: BankReconciliationSettings_getArgs = {}): Promise<BankReconciliationSettings_getResponse> {
    return this.callOperation<BankReconciliationSettings_getResponse>(OPERATION_DEFINITIONS.BankReconciliationSettings_get, args);
  }

  BankReconciliationSettings_getWithMeta(args: BankReconciliationSettings_getArgs = {}): Promise<ApiResult<BankReconciliationSettings_getResponse>> {
    return this.callOperationWithMeta<BankReconciliationSettings_getResponse>(OPERATION_DEFINITIONS.BankReconciliationSettings_get, args);
  }

  BankReconciliationSettings_post(args: BankReconciliationSettings_postArgs): Promise<BankReconciliationSettings_postResponse> {
    return this.callOperation<BankReconciliationSettings_postResponse>(OPERATION_DEFINITIONS.BankReconciliationSettings_post, args);
  }

  BankReconciliationSettings_postWithMeta(args: BankReconciliationSettings_postArgs): Promise<ApiResult<BankReconciliationSettings_postResponse>> {
    return this.callOperationWithMeta<BankReconciliationSettings_postResponse>(OPERATION_DEFINITIONS.BankReconciliationSettings_post, args);
  }

  BankReconciliationSettings_put(args: BankReconciliationSettings_putArgs): Promise<BankReconciliationSettings_putResponse> {
    return this.callOperation<BankReconciliationSettings_putResponse>(OPERATION_DEFINITIONS.BankReconciliationSettings_put, args);
  }

  BankReconciliationSettings_putWithMeta(args: BankReconciliationSettings_putArgs): Promise<ApiResult<BankReconciliationSettings_putResponse>> {
    return this.callOperationWithMeta<BankReconciliationSettings_putResponse>(OPERATION_DEFINITIONS.BankReconciliationSettings_put, args);
  }

  BankReconciliationTransactionsUnmatchedcsv_csvTransactions(args: BankReconciliationTransactionsUnmatchedcsv_csvTransactionsArgs = {}): Promise<BankReconciliationTransactionsUnmatchedcsv_csvTransactionsResponse> {
    return this.callOperation<BankReconciliationTransactionsUnmatchedcsv_csvTransactionsResponse>(OPERATION_DEFINITIONS.BankReconciliationTransactionsUnmatchedcsv_csvTransactions, args);
  }

  BankReconciliationTransactionsUnmatchedcsv_csvTransactionsWithMeta(args: BankReconciliationTransactionsUnmatchedcsv_csvTransactionsArgs = {}): Promise<ApiResult<BankReconciliationTransactionsUnmatchedcsv_csvTransactionsResponse>> {
    return this.callOperationWithMeta<BankReconciliationTransactionsUnmatchedcsv_csvTransactionsResponse>(OPERATION_DEFINITIONS.BankReconciliationTransactionsUnmatchedcsv_csvTransactions, args);
  }

  BankStatement_delete(args: BankStatement_deleteArgs): Promise<BankStatement_deleteResponse> {
    return this.callOperation<BankStatement_deleteResponse>(OPERATION_DEFINITIONS.BankStatement_delete, args);
  }

  BankStatement_deleteWithMeta(args: BankStatement_deleteArgs): Promise<ApiResult<BankStatement_deleteResponse>> {
    return this.callOperationWithMeta<BankStatement_deleteResponse>(OPERATION_DEFINITIONS.BankStatement_delete, args);
  }

  BankStatement_get(args: BankStatement_getArgs): Promise<BankStatement_getResponse> {
    return this.callOperation<BankStatement_getResponse>(OPERATION_DEFINITIONS.BankStatement_get, args);
  }

  BankStatement_getWithMeta(args: BankStatement_getArgs): Promise<ApiResult<BankStatement_getResponse>> {
    return this.callOperationWithMeta<BankStatement_getResponse>(OPERATION_DEFINITIONS.BankStatement_get, args);
  }

  BankStatement_search(args: BankStatement_searchArgs = {}): Promise<BankStatement_searchResponse> {
    return this.callOperation<BankStatement_searchResponse>(OPERATION_DEFINITIONS.BankStatement_search, args);
  }

  BankStatement_searchWithMeta(args: BankStatement_searchArgs = {}): Promise<ApiResult<BankStatement_searchResponse>> {
    return this.callOperationWithMeta<BankStatement_searchResponse>(OPERATION_DEFINITIONS.BankStatement_search, args);
  }

  BankStatementImport_importBankStatement(args: BankStatementImport_importBankStatementArgs = {}): Promise<BankStatementImport_importBankStatementResponse> {
    return this.callOperation<BankStatementImport_importBankStatementResponse>(OPERATION_DEFINITIONS.BankStatementImport_importBankStatement, args);
  }

  BankStatementImport_importBankStatementWithMeta(args: BankStatementImport_importBankStatementArgs = {}): Promise<ApiResult<BankStatementImport_importBankStatementResponse>> {
    return this.callOperationWithMeta<BankStatementImport_importBankStatementResponse>(OPERATION_DEFINITIONS.BankStatementImport_importBankStatement, args);
  }

  BankStatementTransaction_get(args: BankStatementTransaction_getArgs): Promise<BankStatementTransaction_getResponse> {
    return this.callOperation<BankStatementTransaction_getResponse>(OPERATION_DEFINITIONS.BankStatementTransaction_get, args);
  }

  BankStatementTransaction_getWithMeta(args: BankStatementTransaction_getArgs): Promise<ApiResult<BankStatementTransaction_getResponse>> {
    return this.callOperationWithMeta<BankStatementTransaction_getResponse>(OPERATION_DEFINITIONS.BankStatementTransaction_get, args);
  }

  BankStatementTransaction_search(args: BankStatementTransaction_searchArgs = {}): Promise<BankStatementTransaction_searchResponse> {
    return this.callOperation<BankStatementTransaction_searchResponse>(OPERATION_DEFINITIONS.BankStatementTransaction_search, args);
  }

  BankStatementTransaction_searchWithMeta(args: BankStatementTransaction_searchArgs = {}): Promise<ApiResult<BankStatementTransaction_searchResponse>> {
    return this.callOperationWithMeta<BankStatementTransaction_searchResponse>(OPERATION_DEFINITIONS.BankStatementTransaction_search, args);
  }

  BankStatementTransactionDetails_getDetails(args: BankStatementTransactionDetails_getDetailsArgs): Promise<BankStatementTransactionDetails_getDetailsResponse> {
    return this.callOperation<BankStatementTransactionDetails_getDetailsResponse>(OPERATION_DEFINITIONS.BankStatementTransactionDetails_getDetails, args);
  }

  BankStatementTransactionDetails_getDetailsWithMeta(args: BankStatementTransactionDetails_getDetailsArgs): Promise<ApiResult<BankStatementTransactionDetails_getDetailsResponse>> {
    return this.callOperationWithMeta<BankStatementTransactionDetails_getDetailsResponse>(OPERATION_DEFINITIONS.BankStatementTransactionDetails_getDetails, args);
  }

}

export class CompanyResource extends BaseClient {
  Company_get(args: Company_getArgs): Promise<Company_getResponse> {
    return this.callOperation<Company_getResponse>(OPERATION_DEFINITIONS.Company_get, args);
  }

  Company_getWithMeta(args: Company_getArgs): Promise<ApiResult<Company_getResponse>> {
    return this.callOperationWithMeta<Company_getResponse>(OPERATION_DEFINITIONS.Company_get, args);
  }

  Company_put(args: Company_putArgs): Promise<Company_putResponse> {
    return this.callOperation<Company_putResponse>(OPERATION_DEFINITIONS.Company_put, args);
  }

  Company_putWithMeta(args: Company_putArgs): Promise<ApiResult<Company_putResponse>> {
    return this.callOperationWithMeta<Company_putResponse>(OPERATION_DEFINITIONS.Company_put, args);
  }

  CompanyDivisions_getDivisions(args: CompanyDivisions_getDivisionsArgs = {}): Promise<CompanyDivisions_getDivisionsResponse> {
    return this.callOperation<CompanyDivisions_getDivisionsResponse>(OPERATION_DEFINITIONS.CompanyDivisions_getDivisions, args);
  }

  CompanyDivisions_getDivisionsWithMeta(args: CompanyDivisions_getDivisionsArgs = {}): Promise<ApiResult<CompanyDivisions_getDivisionsResponse>> {
    return this.callOperationWithMeta<CompanyDivisions_getDivisionsResponse>(OPERATION_DEFINITIONS.CompanyDivisions_getDivisions, args);
  }

  CompanySalesmodules_get(args: CompanySalesmodules_getArgs = {}): Promise<CompanySalesmodules_getResponse> {
    return this.callOperation<CompanySalesmodules_getResponse>(OPERATION_DEFINITIONS.CompanySalesmodules_get, args);
  }

  CompanySalesmodules_getWithMeta(args: CompanySalesmodules_getArgs = {}): Promise<ApiResult<CompanySalesmodules_getResponse>> {
    return this.callOperationWithMeta<CompanySalesmodules_getResponse>(OPERATION_DEFINITIONS.CompanySalesmodules_get, args);
  }

  CompanySalesmodules_post(args: CompanySalesmodules_postArgs): Promise<CompanySalesmodules_postResponse> {
    return this.callOperation<CompanySalesmodules_postResponse>(OPERATION_DEFINITIONS.CompanySalesmodules_post, args);
  }

  CompanySalesmodules_postWithMeta(args: CompanySalesmodules_postArgs): Promise<ApiResult<CompanySalesmodules_postResponse>> {
    return this.callOperationWithMeta<CompanySalesmodules_postResponse>(OPERATION_DEFINITIONS.CompanySalesmodules_post, args);
  }

  CompanySettingsAltinn_put(args: CompanySettingsAltinn_putArgs): Promise<CompanySettingsAltinn_putResponse> {
    return this.callOperation<CompanySettingsAltinn_putResponse>(OPERATION_DEFINITIONS.CompanySettingsAltinn_put, args);
  }

  CompanySettingsAltinn_putWithMeta(args: CompanySettingsAltinn_putArgs): Promise<ApiResult<CompanySettingsAltinn_putResponse>> {
    return this.callOperationWithMeta<CompanySettingsAltinn_putResponse>(OPERATION_DEFINITIONS.CompanySettingsAltinn_put, args);
  }

  CompanySettingsAltinn_search(args: CompanySettingsAltinn_searchArgs = {}): Promise<CompanySettingsAltinn_searchResponse> {
    return this.callOperation<CompanySettingsAltinn_searchResponse>(OPERATION_DEFINITIONS.CompanySettingsAltinn_search, args);
  }

  CompanySettingsAltinn_searchWithMeta(args: CompanySettingsAltinn_searchArgs = {}): Promise<ApiResult<CompanySettingsAltinn_searchResponse>> {
    return this.callOperationWithMeta<CompanySettingsAltinn_searchResponse>(OPERATION_DEFINITIONS.CompanySettingsAltinn_search, args);
  }

  CompanyWithLoginAccess_getWithLoginAccess(args: CompanyWithLoginAccess_getWithLoginAccessArgs = {}): Promise<CompanyWithLoginAccess_getWithLoginAccessResponse> {
    return this.callOperation<CompanyWithLoginAccess_getWithLoginAccessResponse>(OPERATION_DEFINITIONS.CompanyWithLoginAccess_getWithLoginAccess, args);
  }

  CompanyWithLoginAccess_getWithLoginAccessWithMeta(args: CompanyWithLoginAccess_getWithLoginAccessArgs = {}): Promise<ApiResult<CompanyWithLoginAccess_getWithLoginAccessResponse>> {
    return this.callOperationWithMeta<CompanyWithLoginAccess_getWithLoginAccessResponse>(OPERATION_DEFINITIONS.CompanyWithLoginAccess_getWithLoginAccess, args);
  }

}

export class ContactResource extends BaseClient {
  Contact_get(args: Contact_getArgs): Promise<Contact_getResponse> {
    return this.callOperation<Contact_getResponse>(OPERATION_DEFINITIONS.Contact_get, args);
  }

  Contact_getWithMeta(args: Contact_getArgs): Promise<ApiResult<Contact_getResponse>> {
    return this.callOperationWithMeta<Contact_getResponse>(OPERATION_DEFINITIONS.Contact_get, args);
  }

  Contact_post(args: Contact_postArgs): Promise<Contact_postResponse> {
    return this.callOperation<Contact_postResponse>(OPERATION_DEFINITIONS.Contact_post, args);
  }

  Contact_postWithMeta(args: Contact_postArgs): Promise<ApiResult<Contact_postResponse>> {
    return this.callOperationWithMeta<Contact_postResponse>(OPERATION_DEFINITIONS.Contact_post, args);
  }

  Contact_put(args: Contact_putArgs): Promise<Contact_putResponse> {
    return this.callOperation<Contact_putResponse>(OPERATION_DEFINITIONS.Contact_put, args);
  }

  Contact_putWithMeta(args: Contact_putArgs): Promise<ApiResult<Contact_putResponse>> {
    return this.callOperationWithMeta<Contact_putResponse>(OPERATION_DEFINITIONS.Contact_put, args);
  }

  Contact_search(args: Contact_searchArgs = {}): Promise<Contact_searchResponse> {
    return this.callOperation<Contact_searchResponse>(OPERATION_DEFINITIONS.Contact_search, args);
  }

  Contact_searchWithMeta(args: Contact_searchArgs = {}): Promise<ApiResult<Contact_searchResponse>> {
    return this.callOperationWithMeta<Contact_searchResponse>(OPERATION_DEFINITIONS.Contact_search, args);
  }

  ContactList_deleteByIds(args: ContactList_deleteByIdsArgs = {}): Promise<ContactList_deleteByIdsResponse> {
    return this.callOperation<ContactList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ContactList_deleteByIds, args);
  }

  ContactList_deleteByIdsWithMeta(args: ContactList_deleteByIdsArgs = {}): Promise<ApiResult<ContactList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<ContactList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ContactList_deleteByIds, args);
  }

  ContactList_postList(args: ContactList_postListArgs): Promise<ContactList_postListResponse> {
    return this.callOperation<ContactList_postListResponse>(OPERATION_DEFINITIONS.ContactList_postList, args);
  }

  ContactList_postListWithMeta(args: ContactList_postListArgs): Promise<ApiResult<ContactList_postListResponse>> {
    return this.callOperationWithMeta<ContactList_postListResponse>(OPERATION_DEFINITIONS.ContactList_postList, args);
  }

}

export class CountryResource extends BaseClient {
  Country_get(args: Country_getArgs): Promise<Country_getResponse> {
    return this.callOperation<Country_getResponse>(OPERATION_DEFINITIONS.Country_get, args);
  }

  Country_getWithMeta(args: Country_getArgs): Promise<ApiResult<Country_getResponse>> {
    return this.callOperationWithMeta<Country_getResponse>(OPERATION_DEFINITIONS.Country_get, args);
  }

  Country_search(args: Country_searchArgs = {}): Promise<Country_searchResponse> {
    return this.callOperation<Country_searchResponse>(OPERATION_DEFINITIONS.Country_search, args);
  }

  Country_searchWithMeta(args: Country_searchArgs = {}): Promise<ApiResult<Country_searchResponse>> {
    return this.callOperationWithMeta<Country_searchResponse>(OPERATION_DEFINITIONS.Country_search, args);
  }

}

export class CrmResource extends BaseClient {
  CrmProspect_get(args: CrmProspect_getArgs): Promise<CrmProspect_getResponse> {
    return this.callOperation<CrmProspect_getResponse>(OPERATION_DEFINITIONS.CrmProspect_get, args);
  }

  CrmProspect_getWithMeta(args: CrmProspect_getArgs): Promise<ApiResult<CrmProspect_getResponse>> {
    return this.callOperationWithMeta<CrmProspect_getResponse>(OPERATION_DEFINITIONS.CrmProspect_get, args);
  }

  CrmProspect_search(args: CrmProspect_searchArgs = {}): Promise<CrmProspect_searchResponse> {
    return this.callOperation<CrmProspect_searchResponse>(OPERATION_DEFINITIONS.CrmProspect_search, args);
  }

  CrmProspect_searchWithMeta(args: CrmProspect_searchArgs = {}): Promise<ApiResult<CrmProspect_searchResponse>> {
    return this.callOperationWithMeta<CrmProspect_searchResponse>(OPERATION_DEFINITIONS.CrmProspect_search, args);
  }

}

export class CurrencyResource extends BaseClient {
  Currency_get(args: Currency_getArgs): Promise<Currency_getResponse> {
    return this.callOperation<Currency_getResponse>(OPERATION_DEFINITIONS.Currency_get, args);
  }

  Currency_getWithMeta(args: Currency_getArgs): Promise<ApiResult<Currency_getResponse>> {
    return this.callOperationWithMeta<Currency_getResponse>(OPERATION_DEFINITIONS.Currency_get, args);
  }

  Currency_search(args: Currency_searchArgs = {}): Promise<Currency_searchResponse> {
    return this.callOperation<Currency_searchResponse>(OPERATION_DEFINITIONS.Currency_search, args);
  }

  Currency_searchWithMeta(args: Currency_searchArgs = {}): Promise<ApiResult<Currency_searchResponse>> {
    return this.callOperationWithMeta<Currency_searchResponse>(OPERATION_DEFINITIONS.Currency_search, args);
  }

  CurrencyExchangeRate_convertCurrencyAmount(args: CurrencyExchangeRate_convertCurrencyAmountArgs): Promise<CurrencyExchangeRate_convertCurrencyAmountResponse> {
    return this.callOperation<CurrencyExchangeRate_convertCurrencyAmountResponse>(OPERATION_DEFINITIONS.CurrencyExchangeRate_convertCurrencyAmount, args);
  }

  CurrencyExchangeRate_convertCurrencyAmountWithMeta(args: CurrencyExchangeRate_convertCurrencyAmountArgs): Promise<ApiResult<CurrencyExchangeRate_convertCurrencyAmountResponse>> {
    return this.callOperationWithMeta<CurrencyExchangeRate_convertCurrencyAmountResponse>(OPERATION_DEFINITIONS.CurrencyExchangeRate_convertCurrencyAmount, args);
  }

  CurrencyExchangeRate_getAmountCurrency(args: CurrencyExchangeRate_getAmountCurrencyArgs): Promise<CurrencyExchangeRate_getAmountCurrencyResponse> {
    return this.callOperation<CurrencyExchangeRate_getAmountCurrencyResponse>(OPERATION_DEFINITIONS.CurrencyExchangeRate_getAmountCurrency, args);
  }

  CurrencyExchangeRate_getAmountCurrencyWithMeta(args: CurrencyExchangeRate_getAmountCurrencyArgs): Promise<ApiResult<CurrencyExchangeRate_getAmountCurrencyResponse>> {
    return this.callOperationWithMeta<CurrencyExchangeRate_getAmountCurrencyResponse>(OPERATION_DEFINITIONS.CurrencyExchangeRate_getAmountCurrency, args);
  }

  CurrencyRate_getRate(args: CurrencyRate_getRateArgs): Promise<CurrencyRate_getRateResponse> {
    return this.callOperation<CurrencyRate_getRateResponse>(OPERATION_DEFINITIONS.CurrencyRate_getRate, args);
  }

  CurrencyRate_getRateWithMeta(args: CurrencyRate_getRateArgs): Promise<ApiResult<CurrencyRate_getRateResponse>> {
    return this.callOperationWithMeta<CurrencyRate_getRateResponse>(OPERATION_DEFINITIONS.CurrencyRate_getRate, args);
  }

}

export class CustomerResource extends BaseClient {
  Customer_delete(args: Customer_deleteArgs): Promise<Customer_deleteResponse> {
    return this.callOperation<Customer_deleteResponse>(OPERATION_DEFINITIONS.Customer_delete, args);
  }

  Customer_deleteWithMeta(args: Customer_deleteArgs): Promise<ApiResult<Customer_deleteResponse>> {
    return this.callOperationWithMeta<Customer_deleteResponse>(OPERATION_DEFINITIONS.Customer_delete, args);
  }

  Customer_get(args: Customer_getArgs): Promise<Customer_getResponse> {
    return this.callOperation<Customer_getResponse>(OPERATION_DEFINITIONS.Customer_get, args);
  }

  Customer_getWithMeta(args: Customer_getArgs): Promise<ApiResult<Customer_getResponse>> {
    return this.callOperationWithMeta<Customer_getResponse>(OPERATION_DEFINITIONS.Customer_get, args);
  }

  Customer_post(args: Customer_postArgs): Promise<Customer_postResponse> {
    return this.callOperation<Customer_postResponse>(OPERATION_DEFINITIONS.Customer_post, args);
  }

  Customer_postWithMeta(args: Customer_postArgs): Promise<ApiResult<Customer_postResponse>> {
    return this.callOperationWithMeta<Customer_postResponse>(OPERATION_DEFINITIONS.Customer_post, args);
  }

  Customer_put(args: Customer_putArgs): Promise<Customer_putResponse> {
    return this.callOperation<Customer_putResponse>(OPERATION_DEFINITIONS.Customer_put, args);
  }

  Customer_putWithMeta(args: Customer_putArgs): Promise<ApiResult<Customer_putResponse>> {
    return this.callOperationWithMeta<Customer_putResponse>(OPERATION_DEFINITIONS.Customer_put, args);
  }

  Customer_search(args: Customer_searchArgs = {}): Promise<Customer_searchResponse> {
    return this.callOperation<Customer_searchResponse>(OPERATION_DEFINITIONS.Customer_search, args);
  }

  Customer_searchWithMeta(args: Customer_searchArgs = {}): Promise<ApiResult<Customer_searchResponse>> {
    return this.callOperationWithMeta<Customer_searchResponse>(OPERATION_DEFINITIONS.Customer_search, args);
  }

  CustomerCategory_get(args: CustomerCategory_getArgs): Promise<CustomerCategory_getResponse> {
    return this.callOperation<CustomerCategory_getResponse>(OPERATION_DEFINITIONS.CustomerCategory_get, args);
  }

  CustomerCategory_getWithMeta(args: CustomerCategory_getArgs): Promise<ApiResult<CustomerCategory_getResponse>> {
    return this.callOperationWithMeta<CustomerCategory_getResponse>(OPERATION_DEFINITIONS.CustomerCategory_get, args);
  }

  CustomerCategory_post(args: CustomerCategory_postArgs): Promise<CustomerCategory_postResponse> {
    return this.callOperation<CustomerCategory_postResponse>(OPERATION_DEFINITIONS.CustomerCategory_post, args);
  }

  CustomerCategory_postWithMeta(args: CustomerCategory_postArgs): Promise<ApiResult<CustomerCategory_postResponse>> {
    return this.callOperationWithMeta<CustomerCategory_postResponse>(OPERATION_DEFINITIONS.CustomerCategory_post, args);
  }

  CustomerCategory_put(args: CustomerCategory_putArgs): Promise<CustomerCategory_putResponse> {
    return this.callOperation<CustomerCategory_putResponse>(OPERATION_DEFINITIONS.CustomerCategory_put, args);
  }

  CustomerCategory_putWithMeta(args: CustomerCategory_putArgs): Promise<ApiResult<CustomerCategory_putResponse>> {
    return this.callOperationWithMeta<CustomerCategory_putResponse>(OPERATION_DEFINITIONS.CustomerCategory_put, args);
  }

  CustomerCategory_search(args: CustomerCategory_searchArgs = {}): Promise<CustomerCategory_searchResponse> {
    return this.callOperation<CustomerCategory_searchResponse>(OPERATION_DEFINITIONS.CustomerCategory_search, args);
  }

  CustomerCategory_searchWithMeta(args: CustomerCategory_searchArgs = {}): Promise<ApiResult<CustomerCategory_searchResponse>> {
    return this.callOperationWithMeta<CustomerCategory_searchResponse>(OPERATION_DEFINITIONS.CustomerCategory_search, args);
  }

  CustomerList_postList(args: CustomerList_postListArgs): Promise<CustomerList_postListResponse> {
    return this.callOperation<CustomerList_postListResponse>(OPERATION_DEFINITIONS.CustomerList_postList, args);
  }

  CustomerList_postListWithMeta(args: CustomerList_postListArgs): Promise<ApiResult<CustomerList_postListResponse>> {
    return this.callOperationWithMeta<CustomerList_postListResponse>(OPERATION_DEFINITIONS.CustomerList_postList, args);
  }

  CustomerList_putList(args: CustomerList_putListArgs): Promise<CustomerList_putListResponse> {
    return this.callOperation<CustomerList_putListResponse>(OPERATION_DEFINITIONS.CustomerList_putList, args);
  }

  CustomerList_putListWithMeta(args: CustomerList_putListArgs): Promise<ApiResult<CustomerList_putListResponse>> {
    return this.callOperationWithMeta<CustomerList_putListResponse>(OPERATION_DEFINITIONS.CustomerList_putList, args);
  }

}

export class DeliveryAddressResource extends BaseClient {
  DeliveryAddress_get(args: DeliveryAddress_getArgs): Promise<DeliveryAddress_getResponse> {
    return this.callOperation<DeliveryAddress_getResponse>(OPERATION_DEFINITIONS.DeliveryAddress_get, args);
  }

  DeliveryAddress_getWithMeta(args: DeliveryAddress_getArgs): Promise<ApiResult<DeliveryAddress_getResponse>> {
    return this.callOperationWithMeta<DeliveryAddress_getResponse>(OPERATION_DEFINITIONS.DeliveryAddress_get, args);
  }

  DeliveryAddress_put(args: DeliveryAddress_putArgs): Promise<DeliveryAddress_putResponse> {
    return this.callOperation<DeliveryAddress_putResponse>(OPERATION_DEFINITIONS.DeliveryAddress_put, args);
  }

  DeliveryAddress_putWithMeta(args: DeliveryAddress_putArgs): Promise<ApiResult<DeliveryAddress_putResponse>> {
    return this.callOperationWithMeta<DeliveryAddress_putResponse>(OPERATION_DEFINITIONS.DeliveryAddress_put, args);
  }

  DeliveryAddress_search(args: DeliveryAddress_searchArgs = {}): Promise<DeliveryAddress_searchResponse> {
    return this.callOperation<DeliveryAddress_searchResponse>(OPERATION_DEFINITIONS.DeliveryAddress_search, args);
  }

  DeliveryAddress_searchWithMeta(args: DeliveryAddress_searchArgs = {}): Promise<ApiResult<DeliveryAddress_searchResponse>> {
    return this.callOperationWithMeta<DeliveryAddress_searchResponse>(OPERATION_DEFINITIONS.DeliveryAddress_search, args);
  }

}

export class DepartmentResource extends BaseClient {
  Department_delete(args: Department_deleteArgs): Promise<Department_deleteResponse> {
    return this.callOperation<Department_deleteResponse>(OPERATION_DEFINITIONS.Department_delete, args);
  }

  Department_deleteWithMeta(args: Department_deleteArgs): Promise<ApiResult<Department_deleteResponse>> {
    return this.callOperationWithMeta<Department_deleteResponse>(OPERATION_DEFINITIONS.Department_delete, args);
  }

  Department_get(args: Department_getArgs): Promise<Department_getResponse> {
    return this.callOperation<Department_getResponse>(OPERATION_DEFINITIONS.Department_get, args);
  }

  Department_getWithMeta(args: Department_getArgs): Promise<ApiResult<Department_getResponse>> {
    return this.callOperationWithMeta<Department_getResponse>(OPERATION_DEFINITIONS.Department_get, args);
  }

  Department_post(args: Department_postArgs): Promise<Department_postResponse> {
    return this.callOperation<Department_postResponse>(OPERATION_DEFINITIONS.Department_post, args);
  }

  Department_postWithMeta(args: Department_postArgs): Promise<ApiResult<Department_postResponse>> {
    return this.callOperationWithMeta<Department_postResponse>(OPERATION_DEFINITIONS.Department_post, args);
  }

  Department_put(args: Department_putArgs): Promise<Department_putResponse> {
    return this.callOperation<Department_putResponse>(OPERATION_DEFINITIONS.Department_put, args);
  }

  Department_putWithMeta(args: Department_putArgs): Promise<ApiResult<Department_putResponse>> {
    return this.callOperationWithMeta<Department_putResponse>(OPERATION_DEFINITIONS.Department_put, args);
  }

  Department_search(args: Department_searchArgs = {}): Promise<Department_searchResponse> {
    return this.callOperation<Department_searchResponse>(OPERATION_DEFINITIONS.Department_search, args);
  }

  Department_searchWithMeta(args: Department_searchArgs = {}): Promise<ApiResult<Department_searchResponse>> {
    return this.callOperationWithMeta<Department_searchResponse>(OPERATION_DEFINITIONS.Department_search, args);
  }

  DepartmentList_postList(args: DepartmentList_postListArgs): Promise<DepartmentList_postListResponse> {
    return this.callOperation<DepartmentList_postListResponse>(OPERATION_DEFINITIONS.DepartmentList_postList, args);
  }

  DepartmentList_postListWithMeta(args: DepartmentList_postListArgs): Promise<ApiResult<DepartmentList_postListResponse>> {
    return this.callOperationWithMeta<DepartmentList_postListResponse>(OPERATION_DEFINITIONS.DepartmentList_postList, args);
  }

  DepartmentList_putList(args: DepartmentList_putListArgs): Promise<DepartmentList_putListResponse> {
    return this.callOperation<DepartmentList_putListResponse>(OPERATION_DEFINITIONS.DepartmentList_putList, args);
  }

  DepartmentList_putListWithMeta(args: DepartmentList_putListArgs): Promise<ApiResult<DepartmentList_putListResponse>> {
    return this.callOperationWithMeta<DepartmentList_putListResponse>(OPERATION_DEFINITIONS.DepartmentList_putList, args);
  }

  DepartmentQuery_query(args: DepartmentQuery_queryArgs = {}): Promise<DepartmentQuery_queryResponse> {
    return this.callOperation<DepartmentQuery_queryResponse>(OPERATION_DEFINITIONS.DepartmentQuery_query, args);
  }

  DepartmentQuery_queryWithMeta(args: DepartmentQuery_queryArgs = {}): Promise<ApiResult<DepartmentQuery_queryResponse>> {
    return this.callOperationWithMeta<DepartmentQuery_queryResponse>(OPERATION_DEFINITIONS.DepartmentQuery_query, args);
  }

}

export class DivisionResource extends BaseClient {
  Division_post(args: Division_postArgs): Promise<Division_postResponse> {
    return this.callOperation<Division_postResponse>(OPERATION_DEFINITIONS.Division_post, args);
  }

  Division_postWithMeta(args: Division_postArgs): Promise<ApiResult<Division_postResponse>> {
    return this.callOperationWithMeta<Division_postResponse>(OPERATION_DEFINITIONS.Division_post, args);
  }

  Division_put(args: Division_putArgs): Promise<Division_putResponse> {
    return this.callOperation<Division_putResponse>(OPERATION_DEFINITIONS.Division_put, args);
  }

  Division_putWithMeta(args: Division_putArgs): Promise<ApiResult<Division_putResponse>> {
    return this.callOperationWithMeta<Division_putResponse>(OPERATION_DEFINITIONS.Division_put, args);
  }

  Division_search(args: Division_searchArgs = {}): Promise<Division_searchResponse> {
    return this.callOperation<Division_searchResponse>(OPERATION_DEFINITIONS.Division_search, args);
  }

  Division_searchWithMeta(args: Division_searchArgs = {}): Promise<ApiResult<Division_searchResponse>> {
    return this.callOperationWithMeta<Division_searchResponse>(OPERATION_DEFINITIONS.Division_search, args);
  }

  DivisionList_postList(args: DivisionList_postListArgs): Promise<DivisionList_postListResponse> {
    return this.callOperation<DivisionList_postListResponse>(OPERATION_DEFINITIONS.DivisionList_postList, args);
  }

  DivisionList_postListWithMeta(args: DivisionList_postListArgs): Promise<ApiResult<DivisionList_postListResponse>> {
    return this.callOperationWithMeta<DivisionList_postListResponse>(OPERATION_DEFINITIONS.DivisionList_postList, args);
  }

  DivisionList_putList(args: DivisionList_putListArgs): Promise<DivisionList_putListResponse> {
    return this.callOperation<DivisionList_putListResponse>(OPERATION_DEFINITIONS.DivisionList_putList, args);
  }

  DivisionList_putListWithMeta(args: DivisionList_putListArgs): Promise<ApiResult<DivisionList_putListResponse>> {
    return this.callOperationWithMeta<DivisionList_putListResponse>(OPERATION_DEFINITIONS.DivisionList_putList, args);
  }

}

export class DocumentResource extends BaseClient {
  Document_get(args: Document_getArgs): Promise<Document_getResponse> {
    return this.callOperation<Document_getResponse>(OPERATION_DEFINITIONS.Document_get, args);
  }

  Document_getWithMeta(args: Document_getArgs): Promise<ApiResult<Document_getResponse>> {
    return this.callOperationWithMeta<Document_getResponse>(OPERATION_DEFINITIONS.Document_get, args);
  }

  DocumentContent_downloadContent(args: DocumentContent_downloadContentArgs): Promise<DocumentContent_downloadContentResponse> {
    return this.callOperation<DocumentContent_downloadContentResponse>(OPERATION_DEFINITIONS.DocumentContent_downloadContent, args);
  }

  DocumentContent_downloadContentWithMeta(args: DocumentContent_downloadContentArgs): Promise<ApiResult<DocumentContent_downloadContentResponse>> {
    return this.callOperationWithMeta<DocumentContent_downloadContentResponse>(OPERATION_DEFINITIONS.DocumentContent_downloadContent, args);
  }

}

export class DocumentArchiveResource extends BaseClient {
  DocumentArchive_delete(args: DocumentArchive_deleteArgs): Promise<DocumentArchive_deleteResponse> {
    return this.callOperation<DocumentArchive_deleteResponse>(OPERATION_DEFINITIONS.DocumentArchive_delete, args);
  }

  DocumentArchive_deleteWithMeta(args: DocumentArchive_deleteArgs): Promise<ApiResult<DocumentArchive_deleteResponse>> {
    return this.callOperationWithMeta<DocumentArchive_deleteResponse>(OPERATION_DEFINITIONS.DocumentArchive_delete, args);
  }

  DocumentArchive_put(args: DocumentArchive_putArgs): Promise<DocumentArchive_putResponse> {
    return this.callOperation<DocumentArchive_putResponse>(OPERATION_DEFINITIONS.DocumentArchive_put, args);
  }

  DocumentArchive_putWithMeta(args: DocumentArchive_putArgs): Promise<ApiResult<DocumentArchive_putResponse>> {
    return this.callOperationWithMeta<DocumentArchive_putResponse>(OPERATION_DEFINITIONS.DocumentArchive_put, args);
  }

  DocumentArchiveAccount_accountPost(args: DocumentArchiveAccount_accountPostArgs): Promise<DocumentArchiveAccount_accountPostResponse> {
    return this.callOperation<DocumentArchiveAccount_accountPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveAccount_accountPost, args);
  }

  DocumentArchiveAccount_accountPostWithMeta(args: DocumentArchiveAccount_accountPostArgs): Promise<ApiResult<DocumentArchiveAccount_accountPostResponse>> {
    return this.callOperationWithMeta<DocumentArchiveAccount_accountPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveAccount_accountPost, args);
  }

  DocumentArchiveAccount_getAccount(args: DocumentArchiveAccount_getAccountArgs): Promise<DocumentArchiveAccount_getAccountResponse> {
    return this.callOperation<DocumentArchiveAccount_getAccountResponse>(OPERATION_DEFINITIONS.DocumentArchiveAccount_getAccount, args);
  }

  DocumentArchiveAccount_getAccountWithMeta(args: DocumentArchiveAccount_getAccountArgs): Promise<ApiResult<DocumentArchiveAccount_getAccountResponse>> {
    return this.callOperationWithMeta<DocumentArchiveAccount_getAccountResponse>(OPERATION_DEFINITIONS.DocumentArchiveAccount_getAccount, args);
  }

  DocumentArchiveCustomer_customerPost(args: DocumentArchiveCustomer_customerPostArgs): Promise<DocumentArchiveCustomer_customerPostResponse> {
    return this.callOperation<DocumentArchiveCustomer_customerPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveCustomer_customerPost, args);
  }

  DocumentArchiveCustomer_customerPostWithMeta(args: DocumentArchiveCustomer_customerPostArgs): Promise<ApiResult<DocumentArchiveCustomer_customerPostResponse>> {
    return this.callOperationWithMeta<DocumentArchiveCustomer_customerPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveCustomer_customerPost, args);
  }

  DocumentArchiveCustomer_getCustomer(args: DocumentArchiveCustomer_getCustomerArgs): Promise<DocumentArchiveCustomer_getCustomerResponse> {
    return this.callOperation<DocumentArchiveCustomer_getCustomerResponse>(OPERATION_DEFINITIONS.DocumentArchiveCustomer_getCustomer, args);
  }

  DocumentArchiveCustomer_getCustomerWithMeta(args: DocumentArchiveCustomer_getCustomerArgs): Promise<ApiResult<DocumentArchiveCustomer_getCustomerResponse>> {
    return this.callOperationWithMeta<DocumentArchiveCustomer_getCustomerResponse>(OPERATION_DEFINITIONS.DocumentArchiveCustomer_getCustomer, args);
  }

  DocumentArchiveDynamicControlForm_dynamicControlFormPost(args: DocumentArchiveDynamicControlForm_dynamicControlFormPostArgs): Promise<DocumentArchiveDynamicControlForm_dynamicControlFormPostResponse> {
    return this.callOperation<DocumentArchiveDynamicControlForm_dynamicControlFormPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveDynamicControlForm_dynamicControlFormPost, args);
  }

  DocumentArchiveDynamicControlForm_dynamicControlFormPostWithMeta(args: DocumentArchiveDynamicControlForm_dynamicControlFormPostArgs): Promise<ApiResult<DocumentArchiveDynamicControlForm_dynamicControlFormPostResponse>> {
    return this.callOperationWithMeta<DocumentArchiveDynamicControlForm_dynamicControlFormPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveDynamicControlForm_dynamicControlFormPost, args);
  }

  DocumentArchiveDynamicControlForm_getDynamicControlForm(args: DocumentArchiveDynamicControlForm_getDynamicControlFormArgs): Promise<DocumentArchiveDynamicControlForm_getDynamicControlFormResponse> {
    return this.callOperation<DocumentArchiveDynamicControlForm_getDynamicControlFormResponse>(OPERATION_DEFINITIONS.DocumentArchiveDynamicControlForm_getDynamicControlForm, args);
  }

  DocumentArchiveDynamicControlForm_getDynamicControlFormWithMeta(args: DocumentArchiveDynamicControlForm_getDynamicControlFormArgs): Promise<ApiResult<DocumentArchiveDynamicControlForm_getDynamicControlFormResponse>> {
    return this.callOperationWithMeta<DocumentArchiveDynamicControlForm_getDynamicControlFormResponse>(OPERATION_DEFINITIONS.DocumentArchiveDynamicControlForm_getDynamicControlForm, args);
  }

  DocumentArchiveEmployee_employeePost(args: DocumentArchiveEmployee_employeePostArgs): Promise<DocumentArchiveEmployee_employeePostResponse> {
    return this.callOperation<DocumentArchiveEmployee_employeePostResponse>(OPERATION_DEFINITIONS.DocumentArchiveEmployee_employeePost, args);
  }

  DocumentArchiveEmployee_employeePostWithMeta(args: DocumentArchiveEmployee_employeePostArgs): Promise<ApiResult<DocumentArchiveEmployee_employeePostResponse>> {
    return this.callOperationWithMeta<DocumentArchiveEmployee_employeePostResponse>(OPERATION_DEFINITIONS.DocumentArchiveEmployee_employeePost, args);
  }

  DocumentArchiveEmployee_getEmployee(args: DocumentArchiveEmployee_getEmployeeArgs): Promise<DocumentArchiveEmployee_getEmployeeResponse> {
    return this.callOperation<DocumentArchiveEmployee_getEmployeeResponse>(OPERATION_DEFINITIONS.DocumentArchiveEmployee_getEmployee, args);
  }

  DocumentArchiveEmployee_getEmployeeWithMeta(args: DocumentArchiveEmployee_getEmployeeArgs): Promise<ApiResult<DocumentArchiveEmployee_getEmployeeResponse>> {
    return this.callOperationWithMeta<DocumentArchiveEmployee_getEmployeeResponse>(OPERATION_DEFINITIONS.DocumentArchiveEmployee_getEmployee, args);
  }

  DocumentArchiveProduct_getProduct(args: DocumentArchiveProduct_getProductArgs): Promise<DocumentArchiveProduct_getProductResponse> {
    return this.callOperation<DocumentArchiveProduct_getProductResponse>(OPERATION_DEFINITIONS.DocumentArchiveProduct_getProduct, args);
  }

  DocumentArchiveProduct_getProductWithMeta(args: DocumentArchiveProduct_getProductArgs): Promise<ApiResult<DocumentArchiveProduct_getProductResponse>> {
    return this.callOperationWithMeta<DocumentArchiveProduct_getProductResponse>(OPERATION_DEFINITIONS.DocumentArchiveProduct_getProduct, args);
  }

  DocumentArchiveProduct_productPost(args: DocumentArchiveProduct_productPostArgs): Promise<DocumentArchiveProduct_productPostResponse> {
    return this.callOperation<DocumentArchiveProduct_productPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveProduct_productPost, args);
  }

  DocumentArchiveProduct_productPostWithMeta(args: DocumentArchiveProduct_productPostArgs): Promise<ApiResult<DocumentArchiveProduct_productPostResponse>> {
    return this.callOperationWithMeta<DocumentArchiveProduct_productPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveProduct_productPost, args);
  }

  DocumentArchiveProject_getProject(args: DocumentArchiveProject_getProjectArgs): Promise<DocumentArchiveProject_getProjectResponse> {
    return this.callOperation<DocumentArchiveProject_getProjectResponse>(OPERATION_DEFINITIONS.DocumentArchiveProject_getProject, args);
  }

  DocumentArchiveProject_getProjectWithMeta(args: DocumentArchiveProject_getProjectArgs): Promise<ApiResult<DocumentArchiveProject_getProjectResponse>> {
    return this.callOperationWithMeta<DocumentArchiveProject_getProjectResponse>(OPERATION_DEFINITIONS.DocumentArchiveProject_getProject, args);
  }

  DocumentArchiveProject_projectPost(args: DocumentArchiveProject_projectPostArgs): Promise<DocumentArchiveProject_projectPostResponse> {
    return this.callOperation<DocumentArchiveProject_projectPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveProject_projectPost, args);
  }

  DocumentArchiveProject_projectPostWithMeta(args: DocumentArchiveProject_projectPostArgs): Promise<ApiResult<DocumentArchiveProject_projectPostResponse>> {
    return this.callOperationWithMeta<DocumentArchiveProject_projectPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveProject_projectPost, args);
  }

  DocumentArchiveReception_receptionPost(args: DocumentArchiveReception_receptionPostArgs = {}): Promise<DocumentArchiveReception_receptionPostResponse> {
    return this.callOperation<DocumentArchiveReception_receptionPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveReception_receptionPost, args);
  }

  DocumentArchiveReception_receptionPostWithMeta(args: DocumentArchiveReception_receptionPostArgs = {}): Promise<ApiResult<DocumentArchiveReception_receptionPostResponse>> {
    return this.callOperationWithMeta<DocumentArchiveReception_receptionPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveReception_receptionPost, args);
  }

  DocumentArchiveSupplier_getSupplier(args: DocumentArchiveSupplier_getSupplierArgs): Promise<DocumentArchiveSupplier_getSupplierResponse> {
    return this.callOperation<DocumentArchiveSupplier_getSupplierResponse>(OPERATION_DEFINITIONS.DocumentArchiveSupplier_getSupplier, args);
  }

  DocumentArchiveSupplier_getSupplierWithMeta(args: DocumentArchiveSupplier_getSupplierArgs): Promise<ApiResult<DocumentArchiveSupplier_getSupplierResponse>> {
    return this.callOperationWithMeta<DocumentArchiveSupplier_getSupplierResponse>(OPERATION_DEFINITIONS.DocumentArchiveSupplier_getSupplier, args);
  }

  DocumentArchiveSupplier_supplierPost(args: DocumentArchiveSupplier_supplierPostArgs): Promise<DocumentArchiveSupplier_supplierPostResponse> {
    return this.callOperation<DocumentArchiveSupplier_supplierPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveSupplier_supplierPost, args);
  }

  DocumentArchiveSupplier_supplierPostWithMeta(args: DocumentArchiveSupplier_supplierPostArgs): Promise<ApiResult<DocumentArchiveSupplier_supplierPostResponse>> {
    return this.callOperationWithMeta<DocumentArchiveSupplier_supplierPostResponse>(OPERATION_DEFINITIONS.DocumentArchiveSupplier_supplierPost, args);
  }

}

export class EmployeeResource extends BaseClient {
  Employee_get(args: Employee_getArgs): Promise<Employee_getResponse> {
    return this.callOperation<Employee_getResponse>(OPERATION_DEFINITIONS.Employee_get, args);
  }

  Employee_getWithMeta(args: Employee_getArgs): Promise<ApiResult<Employee_getResponse>> {
    return this.callOperationWithMeta<Employee_getResponse>(OPERATION_DEFINITIONS.Employee_get, args);
  }

  Employee_post(args: Employee_postArgs): Promise<Employee_postResponse> {
    return this.callOperation<Employee_postResponse>(OPERATION_DEFINITIONS.Employee_post, args);
  }

  Employee_postWithMeta(args: Employee_postArgs): Promise<ApiResult<Employee_postResponse>> {
    return this.callOperationWithMeta<Employee_postResponse>(OPERATION_DEFINITIONS.Employee_post, args);
  }

  Employee_put(args: Employee_putArgs): Promise<Employee_putResponse> {
    return this.callOperation<Employee_putResponse>(OPERATION_DEFINITIONS.Employee_put, args);
  }

  Employee_putWithMeta(args: Employee_putArgs): Promise<ApiResult<Employee_putResponse>> {
    return this.callOperationWithMeta<Employee_putResponse>(OPERATION_DEFINITIONS.Employee_put, args);
  }

  Employee_search(args: Employee_searchArgs = {}): Promise<Employee_searchResponse> {
    return this.callOperation<Employee_searchResponse>(OPERATION_DEFINITIONS.Employee_search, args);
  }

  Employee_searchWithMeta(args: Employee_searchArgs = {}): Promise<ApiResult<Employee_searchResponse>> {
    return this.callOperationWithMeta<Employee_searchResponse>(OPERATION_DEFINITIONS.Employee_search, args);
  }

  EmployeeCategory_delete(args: EmployeeCategory_deleteArgs): Promise<EmployeeCategory_deleteResponse> {
    return this.callOperation<EmployeeCategory_deleteResponse>(OPERATION_DEFINITIONS.EmployeeCategory_delete, args);
  }

  EmployeeCategory_deleteWithMeta(args: EmployeeCategory_deleteArgs): Promise<ApiResult<EmployeeCategory_deleteResponse>> {
    return this.callOperationWithMeta<EmployeeCategory_deleteResponse>(OPERATION_DEFINITIONS.EmployeeCategory_delete, args);
  }

  EmployeeCategory_get(args: EmployeeCategory_getArgs): Promise<EmployeeCategory_getResponse> {
    return this.callOperation<EmployeeCategory_getResponse>(OPERATION_DEFINITIONS.EmployeeCategory_get, args);
  }

  EmployeeCategory_getWithMeta(args: EmployeeCategory_getArgs): Promise<ApiResult<EmployeeCategory_getResponse>> {
    return this.callOperationWithMeta<EmployeeCategory_getResponse>(OPERATION_DEFINITIONS.EmployeeCategory_get, args);
  }

  EmployeeCategory_post(args: EmployeeCategory_postArgs): Promise<EmployeeCategory_postResponse> {
    return this.callOperation<EmployeeCategory_postResponse>(OPERATION_DEFINITIONS.EmployeeCategory_post, args);
  }

  EmployeeCategory_postWithMeta(args: EmployeeCategory_postArgs): Promise<ApiResult<EmployeeCategory_postResponse>> {
    return this.callOperationWithMeta<EmployeeCategory_postResponse>(OPERATION_DEFINITIONS.EmployeeCategory_post, args);
  }

  EmployeeCategory_put(args: EmployeeCategory_putArgs): Promise<EmployeeCategory_putResponse> {
    return this.callOperation<EmployeeCategory_putResponse>(OPERATION_DEFINITIONS.EmployeeCategory_put, args);
  }

  EmployeeCategory_putWithMeta(args: EmployeeCategory_putArgs): Promise<ApiResult<EmployeeCategory_putResponse>> {
    return this.callOperationWithMeta<EmployeeCategory_putResponse>(OPERATION_DEFINITIONS.EmployeeCategory_put, args);
  }

  EmployeeCategory_search(args: EmployeeCategory_searchArgs = {}): Promise<EmployeeCategory_searchResponse> {
    return this.callOperation<EmployeeCategory_searchResponse>(OPERATION_DEFINITIONS.EmployeeCategory_search, args);
  }

  EmployeeCategory_searchWithMeta(args: EmployeeCategory_searchArgs = {}): Promise<ApiResult<EmployeeCategory_searchResponse>> {
    return this.callOperationWithMeta<EmployeeCategory_searchResponse>(OPERATION_DEFINITIONS.EmployeeCategory_search, args);
  }

  EmployeeCategoryList_deleteByIds(args: EmployeeCategoryList_deleteByIdsArgs = {}): Promise<EmployeeCategoryList_deleteByIdsResponse> {
    return this.callOperation<EmployeeCategoryList_deleteByIdsResponse>(OPERATION_DEFINITIONS.EmployeeCategoryList_deleteByIds, args);
  }

  EmployeeCategoryList_deleteByIdsWithMeta(args: EmployeeCategoryList_deleteByIdsArgs = {}): Promise<ApiResult<EmployeeCategoryList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<EmployeeCategoryList_deleteByIdsResponse>(OPERATION_DEFINITIONS.EmployeeCategoryList_deleteByIds, args);
  }

  EmployeeCategoryList_postList(args: EmployeeCategoryList_postListArgs): Promise<EmployeeCategoryList_postListResponse> {
    return this.callOperation<EmployeeCategoryList_postListResponse>(OPERATION_DEFINITIONS.EmployeeCategoryList_postList, args);
  }

  EmployeeCategoryList_postListWithMeta(args: EmployeeCategoryList_postListArgs): Promise<ApiResult<EmployeeCategoryList_postListResponse>> {
    return this.callOperationWithMeta<EmployeeCategoryList_postListResponse>(OPERATION_DEFINITIONS.EmployeeCategoryList_postList, args);
  }

  EmployeeCategoryList_putList(args: EmployeeCategoryList_putListArgs): Promise<EmployeeCategoryList_putListResponse> {
    return this.callOperation<EmployeeCategoryList_putListResponse>(OPERATION_DEFINITIONS.EmployeeCategoryList_putList, args);
  }

  EmployeeCategoryList_putListWithMeta(args: EmployeeCategoryList_putListArgs): Promise<ApiResult<EmployeeCategoryList_putListResponse>> {
    return this.callOperationWithMeta<EmployeeCategoryList_putListResponse>(OPERATION_DEFINITIONS.EmployeeCategoryList_putList, args);
  }

  EmployeeEmployment_get(args: EmployeeEmployment_getArgs): Promise<EmployeeEmployment_getResponse> {
    return this.callOperation<EmployeeEmployment_getResponse>(OPERATION_DEFINITIONS.EmployeeEmployment_get, args);
  }

  EmployeeEmployment_getWithMeta(args: EmployeeEmployment_getArgs): Promise<ApiResult<EmployeeEmployment_getResponse>> {
    return this.callOperationWithMeta<EmployeeEmployment_getResponse>(OPERATION_DEFINITIONS.EmployeeEmployment_get, args);
  }

  EmployeeEmployment_post(args: EmployeeEmployment_postArgs): Promise<EmployeeEmployment_postResponse> {
    return this.callOperation<EmployeeEmployment_postResponse>(OPERATION_DEFINITIONS.EmployeeEmployment_post, args);
  }

  EmployeeEmployment_postWithMeta(args: EmployeeEmployment_postArgs): Promise<ApiResult<EmployeeEmployment_postResponse>> {
    return this.callOperationWithMeta<EmployeeEmployment_postResponse>(OPERATION_DEFINITIONS.EmployeeEmployment_post, args);
  }

  EmployeeEmployment_put(args: EmployeeEmployment_putArgs): Promise<EmployeeEmployment_putResponse> {
    return this.callOperation<EmployeeEmployment_putResponse>(OPERATION_DEFINITIONS.EmployeeEmployment_put, args);
  }

  EmployeeEmployment_putWithMeta(args: EmployeeEmployment_putArgs): Promise<ApiResult<EmployeeEmployment_putResponse>> {
    return this.callOperationWithMeta<EmployeeEmployment_putResponse>(OPERATION_DEFINITIONS.EmployeeEmployment_put, args);
  }

  EmployeeEmployment_search(args: EmployeeEmployment_searchArgs = {}): Promise<EmployeeEmployment_searchResponse> {
    return this.callOperation<EmployeeEmployment_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmployment_search, args);
  }

  EmployeeEmployment_searchWithMeta(args: EmployeeEmployment_searchArgs = {}): Promise<ApiResult<EmployeeEmployment_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEmployment_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmployment_search, args);
  }

  EmployeeEmploymentDetails_get(args: EmployeeEmploymentDetails_getArgs): Promise<EmployeeEmploymentDetails_getResponse> {
    return this.callOperation<EmployeeEmploymentDetails_getResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_get, args);
  }

  EmployeeEmploymentDetails_getWithMeta(args: EmployeeEmploymentDetails_getArgs): Promise<ApiResult<EmployeeEmploymentDetails_getResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentDetails_getResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_get, args);
  }

  EmployeeEmploymentDetails_post(args: EmployeeEmploymentDetails_postArgs): Promise<EmployeeEmploymentDetails_postResponse> {
    return this.callOperation<EmployeeEmploymentDetails_postResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_post, args);
  }

  EmployeeEmploymentDetails_postWithMeta(args: EmployeeEmploymentDetails_postArgs): Promise<ApiResult<EmployeeEmploymentDetails_postResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentDetails_postResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_post, args);
  }

  EmployeeEmploymentDetails_put(args: EmployeeEmploymentDetails_putArgs): Promise<EmployeeEmploymentDetails_putResponse> {
    return this.callOperation<EmployeeEmploymentDetails_putResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_put, args);
  }

  EmployeeEmploymentDetails_putWithMeta(args: EmployeeEmploymentDetails_putArgs): Promise<ApiResult<EmployeeEmploymentDetails_putResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentDetails_putResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_put, args);
  }

  EmployeeEmploymentDetails_search(args: EmployeeEmploymentDetails_searchArgs = {}): Promise<EmployeeEmploymentDetails_searchResponse> {
    return this.callOperation<EmployeeEmploymentDetails_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_search, args);
  }

  EmployeeEmploymentDetails_searchWithMeta(args: EmployeeEmploymentDetails_searchArgs = {}): Promise<ApiResult<EmployeeEmploymentDetails_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentDetails_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_search, args);
  }

  EmployeeEmploymentEmploymentType_search(args: EmployeeEmploymentEmploymentType_searchArgs = {}): Promise<EmployeeEmploymentEmploymentType_searchResponse> {
    return this.callOperation<EmployeeEmploymentEmploymentType_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentType_search, args);
  }

  EmployeeEmploymentEmploymentType_searchWithMeta(args: EmployeeEmploymentEmploymentType_searchArgs = {}): Promise<ApiResult<EmployeeEmploymentEmploymentType_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentEmploymentType_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentType_search, args);
  }

  EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType(args: EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeArgs = {}): Promise<EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeResponse> {
    return this.callOperation<EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType, args);
  }

  EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeWithMeta(args: EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeArgs = {}): Promise<ApiResult<EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType, args);
  }

  EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType(args: EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeArgs = {}): Promise<EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeResponse> {
    return this.callOperation<EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType, args);
  }

  EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeWithMeta(args: EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeArgs = {}): Promise<ApiResult<EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType, args);
  }

  EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType(args: EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeArgs = {}): Promise<EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeResponse> {
    return this.callOperation<EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType, args);
  }

  EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeWithMeta(args: EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeArgs = {}): Promise<ApiResult<EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType, args);
  }

  EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType(args: EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeArgs = {}): Promise<EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeResponse> {
    return this.callOperation<EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType, args);
  }

  EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeWithMeta(args: EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeArgs = {}): Promise<ApiResult<EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType, args);
  }

  EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType(args: EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeArgs = {}): Promise<EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeResponse> {
    return this.callOperation<EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType, args);
  }

  EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeWithMeta(args: EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeArgs = {}): Promise<ApiResult<EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType, args);
  }

  EmployeeEmploymentLeaveOfAbsence_get(args: EmployeeEmploymentLeaveOfAbsence_getArgs): Promise<EmployeeEmploymentLeaveOfAbsence_getResponse> {
    return this.callOperation<EmployeeEmploymentLeaveOfAbsence_getResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_get, args);
  }

  EmployeeEmploymentLeaveOfAbsence_getWithMeta(args: EmployeeEmploymentLeaveOfAbsence_getArgs): Promise<ApiResult<EmployeeEmploymentLeaveOfAbsence_getResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentLeaveOfAbsence_getResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_get, args);
  }

  EmployeeEmploymentLeaveOfAbsence_post(args: EmployeeEmploymentLeaveOfAbsence_postArgs): Promise<EmployeeEmploymentLeaveOfAbsence_postResponse> {
    return this.callOperation<EmployeeEmploymentLeaveOfAbsence_postResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_post, args);
  }

  EmployeeEmploymentLeaveOfAbsence_postWithMeta(args: EmployeeEmploymentLeaveOfAbsence_postArgs): Promise<ApiResult<EmployeeEmploymentLeaveOfAbsence_postResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentLeaveOfAbsence_postResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_post, args);
  }

  EmployeeEmploymentLeaveOfAbsence_put(args: EmployeeEmploymentLeaveOfAbsence_putArgs): Promise<EmployeeEmploymentLeaveOfAbsence_putResponse> {
    return this.callOperation<EmployeeEmploymentLeaveOfAbsence_putResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_put, args);
  }

  EmployeeEmploymentLeaveOfAbsence_putWithMeta(args: EmployeeEmploymentLeaveOfAbsence_putArgs): Promise<ApiResult<EmployeeEmploymentLeaveOfAbsence_putResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentLeaveOfAbsence_putResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_put, args);
  }

  EmployeeEmploymentLeaveOfAbsence_search(args: EmployeeEmploymentLeaveOfAbsence_searchArgs = {}): Promise<EmployeeEmploymentLeaveOfAbsence_searchResponse> {
    return this.callOperation<EmployeeEmploymentLeaveOfAbsence_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_search, args);
  }

  EmployeeEmploymentLeaveOfAbsence_searchWithMeta(args: EmployeeEmploymentLeaveOfAbsence_searchArgs = {}): Promise<ApiResult<EmployeeEmploymentLeaveOfAbsence_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentLeaveOfAbsence_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_search, args);
  }

  EmployeeEmploymentLeaveOfAbsenceList_postList(args: EmployeeEmploymentLeaveOfAbsenceList_postListArgs): Promise<EmployeeEmploymentLeaveOfAbsenceList_postListResponse> {
    return this.callOperation<EmployeeEmploymentLeaveOfAbsenceList_postListResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsenceList_postList, args);
  }

  EmployeeEmploymentLeaveOfAbsenceList_postListWithMeta(args: EmployeeEmploymentLeaveOfAbsenceList_postListArgs): Promise<ApiResult<EmployeeEmploymentLeaveOfAbsenceList_postListResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentLeaveOfAbsenceList_postListResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsenceList_postList, args);
  }

  EmployeeEmploymentLeaveOfAbsenceType_search(args: EmployeeEmploymentLeaveOfAbsenceType_searchArgs = {}): Promise<EmployeeEmploymentLeaveOfAbsenceType_searchResponse> {
    return this.callOperation<EmployeeEmploymentLeaveOfAbsenceType_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsenceType_search, args);
  }

  EmployeeEmploymentLeaveOfAbsenceType_searchWithMeta(args: EmployeeEmploymentLeaveOfAbsenceType_searchArgs = {}): Promise<ApiResult<EmployeeEmploymentLeaveOfAbsenceType_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentLeaveOfAbsenceType_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsenceType_search, args);
  }

  EmployeeEmploymentOccupationCode_get(args: EmployeeEmploymentOccupationCode_getArgs): Promise<EmployeeEmploymentOccupationCode_getResponse> {
    return this.callOperation<EmployeeEmploymentOccupationCode_getResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentOccupationCode_get, args);
  }

  EmployeeEmploymentOccupationCode_getWithMeta(args: EmployeeEmploymentOccupationCode_getArgs): Promise<ApiResult<EmployeeEmploymentOccupationCode_getResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentOccupationCode_getResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentOccupationCode_get, args);
  }

  EmployeeEmploymentOccupationCode_search(args: EmployeeEmploymentOccupationCode_searchArgs = {}): Promise<EmployeeEmploymentOccupationCode_searchResponse> {
    return this.callOperation<EmployeeEmploymentOccupationCode_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentOccupationCode_search, args);
  }

  EmployeeEmploymentOccupationCode_searchWithMeta(args: EmployeeEmploymentOccupationCode_searchArgs = {}): Promise<ApiResult<EmployeeEmploymentOccupationCode_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentOccupationCode_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentOccupationCode_search, args);
  }

  EmployeeEmploymentRemunerationType_search(args: EmployeeEmploymentRemunerationType_searchArgs = {}): Promise<EmployeeEmploymentRemunerationType_searchResponse> {
    return this.callOperation<EmployeeEmploymentRemunerationType_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentRemunerationType_search, args);
  }

  EmployeeEmploymentRemunerationType_searchWithMeta(args: EmployeeEmploymentRemunerationType_searchArgs = {}): Promise<ApiResult<EmployeeEmploymentRemunerationType_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentRemunerationType_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentRemunerationType_search, args);
  }

  EmployeeEmploymentWorkingHoursScheme_search(args: EmployeeEmploymentWorkingHoursScheme_searchArgs = {}): Promise<EmployeeEmploymentWorkingHoursScheme_searchResponse> {
    return this.callOperation<EmployeeEmploymentWorkingHoursScheme_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentWorkingHoursScheme_search, args);
  }

  EmployeeEmploymentWorkingHoursScheme_searchWithMeta(args: EmployeeEmploymentWorkingHoursScheme_searchArgs = {}): Promise<ApiResult<EmployeeEmploymentWorkingHoursScheme_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEmploymentWorkingHoursScheme_searchResponse>(OPERATION_DEFINITIONS.EmployeeEmploymentWorkingHoursScheme_search, args);
  }

  EmployeeEntitlement_get(args: EmployeeEntitlement_getArgs): Promise<EmployeeEntitlement_getResponse> {
    return this.callOperation<EmployeeEntitlement_getResponse>(OPERATION_DEFINITIONS.EmployeeEntitlement_get, args);
  }

  EmployeeEntitlement_getWithMeta(args: EmployeeEntitlement_getArgs): Promise<ApiResult<EmployeeEntitlement_getResponse>> {
    return this.callOperationWithMeta<EmployeeEntitlement_getResponse>(OPERATION_DEFINITIONS.EmployeeEntitlement_get, args);
  }

  EmployeeEntitlement_search(args: EmployeeEntitlement_searchArgs = {}): Promise<EmployeeEntitlement_searchResponse> {
    return this.callOperation<EmployeeEntitlement_searchResponse>(OPERATION_DEFINITIONS.EmployeeEntitlement_search, args);
  }

  EmployeeEntitlement_searchWithMeta(args: EmployeeEntitlement_searchArgs = {}): Promise<ApiResult<EmployeeEntitlement_searchResponse>> {
    return this.callOperationWithMeta<EmployeeEntitlement_searchResponse>(OPERATION_DEFINITIONS.EmployeeEntitlement_search, args);
  }

  EmployeeEntitlementClient_client(args: EmployeeEntitlementClient_clientArgs = {}): Promise<EmployeeEntitlementClient_clientResponse> {
    return this.callOperation<EmployeeEntitlementClient_clientResponse>(OPERATION_DEFINITIONS.EmployeeEntitlementClient_client, args);
  }

  EmployeeEntitlementClient_clientWithMeta(args: EmployeeEntitlementClient_clientArgs = {}): Promise<ApiResult<EmployeeEntitlementClient_clientResponse>> {
    return this.callOperationWithMeta<EmployeeEntitlementClient_clientResponse>(OPERATION_DEFINITIONS.EmployeeEntitlementClient_client, args);
  }

  EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate(args: EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateArgs = {}): Promise<EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateResponse> {
    return this.callOperation<EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateResponse>(OPERATION_DEFINITIONS.EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate, args);
  }

  EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateWithMeta(args: EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateArgs = {}): Promise<ApiResult<EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateResponse>> {
    return this.callOperationWithMeta<EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateResponse>(OPERATION_DEFINITIONS.EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate, args);
  }

  EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate(args: EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateArgs = {}): Promise<EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateResponse> {
    return this.callOperation<EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateResponse>(OPERATION_DEFINITIONS.EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate, args);
  }

  EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateWithMeta(args: EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateArgs = {}): Promise<ApiResult<EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateResponse>> {
    return this.callOperationWithMeta<EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateResponse>(OPERATION_DEFINITIONS.EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate, args);
  }

  EmployeeHourlyCostAndRate_get(args: EmployeeHourlyCostAndRate_getArgs): Promise<EmployeeHourlyCostAndRate_getResponse> {
    return this.callOperation<EmployeeHourlyCostAndRate_getResponse>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_get, args);
  }

  EmployeeHourlyCostAndRate_getWithMeta(args: EmployeeHourlyCostAndRate_getArgs): Promise<ApiResult<EmployeeHourlyCostAndRate_getResponse>> {
    return this.callOperationWithMeta<EmployeeHourlyCostAndRate_getResponse>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_get, args);
  }

  EmployeeHourlyCostAndRate_post(args: EmployeeHourlyCostAndRate_postArgs): Promise<EmployeeHourlyCostAndRate_postResponse> {
    return this.callOperation<EmployeeHourlyCostAndRate_postResponse>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_post, args);
  }

  EmployeeHourlyCostAndRate_postWithMeta(args: EmployeeHourlyCostAndRate_postArgs): Promise<ApiResult<EmployeeHourlyCostAndRate_postResponse>> {
    return this.callOperationWithMeta<EmployeeHourlyCostAndRate_postResponse>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_post, args);
  }

  EmployeeHourlyCostAndRate_put(args: EmployeeHourlyCostAndRate_putArgs): Promise<EmployeeHourlyCostAndRate_putResponse> {
    return this.callOperation<EmployeeHourlyCostAndRate_putResponse>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_put, args);
  }

  EmployeeHourlyCostAndRate_putWithMeta(args: EmployeeHourlyCostAndRate_putArgs): Promise<ApiResult<EmployeeHourlyCostAndRate_putResponse>> {
    return this.callOperationWithMeta<EmployeeHourlyCostAndRate_putResponse>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_put, args);
  }

  EmployeeHourlyCostAndRate_search(args: EmployeeHourlyCostAndRate_searchArgs = {}): Promise<EmployeeHourlyCostAndRate_searchResponse> {
    return this.callOperation<EmployeeHourlyCostAndRate_searchResponse>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_search, args);
  }

  EmployeeHourlyCostAndRate_searchWithMeta(args: EmployeeHourlyCostAndRate_searchArgs = {}): Promise<ApiResult<EmployeeHourlyCostAndRate_searchResponse>> {
    return this.callOperationWithMeta<EmployeeHourlyCostAndRate_searchResponse>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_search, args);
  }

  EmployeeList_postList(args: EmployeeList_postListArgs): Promise<EmployeeList_postListResponse> {
    return this.callOperation<EmployeeList_postListResponse>(OPERATION_DEFINITIONS.EmployeeList_postList, args);
  }

  EmployeeList_postListWithMeta(args: EmployeeList_postListArgs): Promise<ApiResult<EmployeeList_postListResponse>> {
    return this.callOperationWithMeta<EmployeeList_postListResponse>(OPERATION_DEFINITIONS.EmployeeList_postList, args);
  }

  EmployeeNextOfKin_get(args: EmployeeNextOfKin_getArgs): Promise<EmployeeNextOfKin_getResponse> {
    return this.callOperation<EmployeeNextOfKin_getResponse>(OPERATION_DEFINITIONS.EmployeeNextOfKin_get, args);
  }

  EmployeeNextOfKin_getWithMeta(args: EmployeeNextOfKin_getArgs): Promise<ApiResult<EmployeeNextOfKin_getResponse>> {
    return this.callOperationWithMeta<EmployeeNextOfKin_getResponse>(OPERATION_DEFINITIONS.EmployeeNextOfKin_get, args);
  }

  EmployeeNextOfKin_post(args: EmployeeNextOfKin_postArgs): Promise<EmployeeNextOfKin_postResponse> {
    return this.callOperation<EmployeeNextOfKin_postResponse>(OPERATION_DEFINITIONS.EmployeeNextOfKin_post, args);
  }

  EmployeeNextOfKin_postWithMeta(args: EmployeeNextOfKin_postArgs): Promise<ApiResult<EmployeeNextOfKin_postResponse>> {
    return this.callOperationWithMeta<EmployeeNextOfKin_postResponse>(OPERATION_DEFINITIONS.EmployeeNextOfKin_post, args);
  }

  EmployeeNextOfKin_put(args: EmployeeNextOfKin_putArgs): Promise<EmployeeNextOfKin_putResponse> {
    return this.callOperation<EmployeeNextOfKin_putResponse>(OPERATION_DEFINITIONS.EmployeeNextOfKin_put, args);
  }

  EmployeeNextOfKin_putWithMeta(args: EmployeeNextOfKin_putArgs): Promise<ApiResult<EmployeeNextOfKin_putResponse>> {
    return this.callOperationWithMeta<EmployeeNextOfKin_putResponse>(OPERATION_DEFINITIONS.EmployeeNextOfKin_put, args);
  }

  EmployeeNextOfKin_search(args: EmployeeNextOfKin_searchArgs = {}): Promise<EmployeeNextOfKin_searchResponse> {
    return this.callOperation<EmployeeNextOfKin_searchResponse>(OPERATION_DEFINITIONS.EmployeeNextOfKin_search, args);
  }

  EmployeeNextOfKin_searchWithMeta(args: EmployeeNextOfKin_searchArgs = {}): Promise<ApiResult<EmployeeNextOfKin_searchResponse>> {
    return this.callOperationWithMeta<EmployeeNextOfKin_searchResponse>(OPERATION_DEFINITIONS.EmployeeNextOfKin_search, args);
  }

  EmployeePreferences_put(args: EmployeePreferences_putArgs): Promise<EmployeePreferences_putResponse> {
    return this.callOperation<EmployeePreferences_putResponse>(OPERATION_DEFINITIONS.EmployeePreferences_put, args);
  }

  EmployeePreferences_putWithMeta(args: EmployeePreferences_putArgs): Promise<ApiResult<EmployeePreferences_putResponse>> {
    return this.callOperationWithMeta<EmployeePreferences_putResponse>(OPERATION_DEFINITIONS.EmployeePreferences_put, args);
  }

  EmployeePreferences_search(args: EmployeePreferences_searchArgs = {}): Promise<EmployeePreferences_searchResponse> {
    return this.callOperation<EmployeePreferences_searchResponse>(OPERATION_DEFINITIONS.EmployeePreferences_search, args);
  }

  EmployeePreferences_searchWithMeta(args: EmployeePreferences_searchArgs = {}): Promise<ApiResult<EmployeePreferences_searchResponse>> {
    return this.callOperationWithMeta<EmployeePreferences_searchResponse>(OPERATION_DEFINITIONS.EmployeePreferences_search, args);
  }

  EmployeePreferencesChangeLanguage_changeLanguage(args: EmployeePreferencesChangeLanguage_changeLanguageArgs = {}): Promise<EmployeePreferencesChangeLanguage_changeLanguageResponse> {
    return this.callOperation<EmployeePreferencesChangeLanguage_changeLanguageResponse>(OPERATION_DEFINITIONS.EmployeePreferencesChangeLanguage_changeLanguage, args);
  }

  EmployeePreferencesChangeLanguage_changeLanguageWithMeta(args: EmployeePreferencesChangeLanguage_changeLanguageArgs = {}): Promise<ApiResult<EmployeePreferencesChangeLanguage_changeLanguageResponse>> {
    return this.callOperationWithMeta<EmployeePreferencesChangeLanguage_changeLanguageResponse>(OPERATION_DEFINITIONS.EmployeePreferencesChangeLanguage_changeLanguage, args);
  }

  EmployeePreferencesList_putList(args: EmployeePreferencesList_putListArgs): Promise<EmployeePreferencesList_putListResponse> {
    return this.callOperation<EmployeePreferencesList_putListResponse>(OPERATION_DEFINITIONS.EmployeePreferencesList_putList, args);
  }

  EmployeePreferencesList_putListWithMeta(args: EmployeePreferencesList_putListArgs): Promise<ApiResult<EmployeePreferencesList_putListResponse>> {
    return this.callOperationWithMeta<EmployeePreferencesList_putListResponse>(OPERATION_DEFINITIONS.EmployeePreferencesList_putList, args);
  }

  EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences(args: EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesArgs = {}): Promise<EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesResponse> {
    return this.callOperation<EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesResponse>(OPERATION_DEFINITIONS.EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences, args);
  }

  EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesWithMeta(args: EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesArgs = {}): Promise<ApiResult<EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesResponse>> {
    return this.callOperationWithMeta<EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesResponse>(OPERATION_DEFINITIONS.EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences, args);
  }

  EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts(args: EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsArgs = {}): Promise<EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsResponse> {
    return this.callOperation<EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsResponse>(OPERATION_DEFINITIONS.EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts, args);
  }

  EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsWithMeta(args: EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsArgs = {}): Promise<ApiResult<EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsResponse>> {
    return this.callOperationWithMeta<EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsResponse>(OPERATION_DEFINITIONS.EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts, args);
  }

  EmployeeStandardTime_get(args: EmployeeStandardTime_getArgs): Promise<EmployeeStandardTime_getResponse> {
    return this.callOperation<EmployeeStandardTime_getResponse>(OPERATION_DEFINITIONS.EmployeeStandardTime_get, args);
  }

  EmployeeStandardTime_getWithMeta(args: EmployeeStandardTime_getArgs): Promise<ApiResult<EmployeeStandardTime_getResponse>> {
    return this.callOperationWithMeta<EmployeeStandardTime_getResponse>(OPERATION_DEFINITIONS.EmployeeStandardTime_get, args);
  }

  EmployeeStandardTime_post(args: EmployeeStandardTime_postArgs): Promise<EmployeeStandardTime_postResponse> {
    return this.callOperation<EmployeeStandardTime_postResponse>(OPERATION_DEFINITIONS.EmployeeStandardTime_post, args);
  }

  EmployeeStandardTime_postWithMeta(args: EmployeeStandardTime_postArgs): Promise<ApiResult<EmployeeStandardTime_postResponse>> {
    return this.callOperationWithMeta<EmployeeStandardTime_postResponse>(OPERATION_DEFINITIONS.EmployeeStandardTime_post, args);
  }

  EmployeeStandardTime_put(args: EmployeeStandardTime_putArgs): Promise<EmployeeStandardTime_putResponse> {
    return this.callOperation<EmployeeStandardTime_putResponse>(OPERATION_DEFINITIONS.EmployeeStandardTime_put, args);
  }

  EmployeeStandardTime_putWithMeta(args: EmployeeStandardTime_putArgs): Promise<ApiResult<EmployeeStandardTime_putResponse>> {
    return this.callOperationWithMeta<EmployeeStandardTime_putResponse>(OPERATION_DEFINITIONS.EmployeeStandardTime_put, args);
  }

  EmployeeStandardTime_search(args: EmployeeStandardTime_searchArgs = {}): Promise<EmployeeStandardTime_searchResponse> {
    return this.callOperation<EmployeeStandardTime_searchResponse>(OPERATION_DEFINITIONS.EmployeeStandardTime_search, args);
  }

  EmployeeStandardTime_searchWithMeta(args: EmployeeStandardTime_searchArgs = {}): Promise<ApiResult<EmployeeStandardTime_searchResponse>> {
    return this.callOperationWithMeta<EmployeeStandardTime_searchResponse>(OPERATION_DEFINITIONS.EmployeeStandardTime_search, args);
  }

  EmployeeStandardTimeByDate_getByDate(args: EmployeeStandardTimeByDate_getByDateArgs = {}): Promise<EmployeeStandardTimeByDate_getByDateResponse> {
    return this.callOperation<EmployeeStandardTimeByDate_getByDateResponse>(OPERATION_DEFINITIONS.EmployeeStandardTimeByDate_getByDate, args);
  }

  EmployeeStandardTimeByDate_getByDateWithMeta(args: EmployeeStandardTimeByDate_getByDateArgs = {}): Promise<ApiResult<EmployeeStandardTimeByDate_getByDateResponse>> {
    return this.callOperationWithMeta<EmployeeStandardTimeByDate_getByDateResponse>(OPERATION_DEFINITIONS.EmployeeStandardTimeByDate_getByDate, args);
  }

}

export class EventResource extends BaseClient {
  Event_example(args: Event_exampleArgs): Promise<Event_exampleResponse> {
    return this.callOperation<Event_exampleResponse>(OPERATION_DEFINITIONS.Event_example, args);
  }

  Event_exampleWithMeta(args: Event_exampleArgs): Promise<ApiResult<Event_exampleResponse>> {
    return this.callOperationWithMeta<Event_exampleResponse>(OPERATION_DEFINITIONS.Event_example, args);
  }

  Event_get(args: Event_getArgs = {}): Promise<Event_getResponse> {
    return this.callOperation<Event_getResponse>(OPERATION_DEFINITIONS.Event_get, args);
  }

  Event_getWithMeta(args: Event_getArgs = {}): Promise<ApiResult<Event_getResponse>> {
    return this.callOperationWithMeta<Event_getResponse>(OPERATION_DEFINITIONS.Event_get, args);
  }

  EventSubscription_delete(args: EventSubscription_deleteArgs): Promise<EventSubscription_deleteResponse> {
    return this.callOperation<EventSubscription_deleteResponse>(OPERATION_DEFINITIONS.EventSubscription_delete, args);
  }

  EventSubscription_deleteWithMeta(args: EventSubscription_deleteArgs): Promise<ApiResult<EventSubscription_deleteResponse>> {
    return this.callOperationWithMeta<EventSubscription_deleteResponse>(OPERATION_DEFINITIONS.EventSubscription_delete, args);
  }

  EventSubscription_get(args: EventSubscription_getArgs): Promise<EventSubscription_getResponse> {
    return this.callOperation<EventSubscription_getResponse>(OPERATION_DEFINITIONS.EventSubscription_get, args);
  }

  EventSubscription_getWithMeta(args: EventSubscription_getArgs): Promise<ApiResult<EventSubscription_getResponse>> {
    return this.callOperationWithMeta<EventSubscription_getResponse>(OPERATION_DEFINITIONS.EventSubscription_get, args);
  }

  EventSubscription_post(args: EventSubscription_postArgs): Promise<EventSubscription_postResponse> {
    return this.callOperation<EventSubscription_postResponse>(OPERATION_DEFINITIONS.EventSubscription_post, args);
  }

  EventSubscription_postWithMeta(args: EventSubscription_postArgs): Promise<ApiResult<EventSubscription_postResponse>> {
    return this.callOperationWithMeta<EventSubscription_postResponse>(OPERATION_DEFINITIONS.EventSubscription_post, args);
  }

  EventSubscription_put(args: EventSubscription_putArgs): Promise<EventSubscription_putResponse> {
    return this.callOperation<EventSubscription_putResponse>(OPERATION_DEFINITIONS.EventSubscription_put, args);
  }

  EventSubscription_putWithMeta(args: EventSubscription_putArgs): Promise<ApiResult<EventSubscription_putResponse>> {
    return this.callOperationWithMeta<EventSubscription_putResponse>(OPERATION_DEFINITIONS.EventSubscription_put, args);
  }

  EventSubscription_search(args: EventSubscription_searchArgs = {}): Promise<EventSubscription_searchResponse> {
    return this.callOperation<EventSubscription_searchResponse>(OPERATION_DEFINITIONS.EventSubscription_search, args);
  }

  EventSubscription_searchWithMeta(args: EventSubscription_searchArgs = {}): Promise<ApiResult<EventSubscription_searchResponse>> {
    return this.callOperationWithMeta<EventSubscription_searchResponse>(OPERATION_DEFINITIONS.EventSubscription_search, args);
  }

  EventSubscriptionList_deleteByIds(args: EventSubscriptionList_deleteByIdsArgs = {}): Promise<EventSubscriptionList_deleteByIdsResponse> {
    return this.callOperation<EventSubscriptionList_deleteByIdsResponse>(OPERATION_DEFINITIONS.EventSubscriptionList_deleteByIds, args);
  }

  EventSubscriptionList_deleteByIdsWithMeta(args: EventSubscriptionList_deleteByIdsArgs = {}): Promise<ApiResult<EventSubscriptionList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<EventSubscriptionList_deleteByIdsResponse>(OPERATION_DEFINITIONS.EventSubscriptionList_deleteByIds, args);
  }

  EventSubscriptionList_postList(args: EventSubscriptionList_postListArgs): Promise<EventSubscriptionList_postListResponse> {
    return this.callOperation<EventSubscriptionList_postListResponse>(OPERATION_DEFINITIONS.EventSubscriptionList_postList, args);
  }

  EventSubscriptionList_postListWithMeta(args: EventSubscriptionList_postListArgs): Promise<ApiResult<EventSubscriptionList_postListResponse>> {
    return this.callOperationWithMeta<EventSubscriptionList_postListResponse>(OPERATION_DEFINITIONS.EventSubscriptionList_postList, args);
  }

  EventSubscriptionList_putList(args: EventSubscriptionList_putListArgs): Promise<EventSubscriptionList_putListResponse> {
    return this.callOperation<EventSubscriptionList_putListResponse>(OPERATION_DEFINITIONS.EventSubscriptionList_putList, args);
  }

  EventSubscriptionList_putListWithMeta(args: EventSubscriptionList_putListArgs): Promise<ApiResult<EventSubscriptionList_putListResponse>> {
    return this.callOperationWithMeta<EventSubscriptionList_putListResponse>(OPERATION_DEFINITIONS.EventSubscriptionList_putList, args);
  }

}

export class IncomingInvoiceResource extends BaseClient {
  IncomingInvoice_get(args: IncomingInvoice_getArgs): Promise<IncomingInvoice_getResponse> {
    return this.callOperation<IncomingInvoice_getResponse>(OPERATION_DEFINITIONS.IncomingInvoice_get, args);
  }

  IncomingInvoice_getWithMeta(args: IncomingInvoice_getArgs): Promise<ApiResult<IncomingInvoice_getResponse>> {
    return this.callOperationWithMeta<IncomingInvoice_getResponse>(OPERATION_DEFINITIONS.IncomingInvoice_get, args);
  }

  IncomingInvoice_post(args: IncomingInvoice_postArgs): Promise<IncomingInvoice_postResponse> {
    return this.callOperation<IncomingInvoice_postResponse>(OPERATION_DEFINITIONS.IncomingInvoice_post, args);
  }

  IncomingInvoice_postWithMeta(args: IncomingInvoice_postArgs): Promise<ApiResult<IncomingInvoice_postResponse>> {
    return this.callOperationWithMeta<IncomingInvoice_postResponse>(OPERATION_DEFINITIONS.IncomingInvoice_post, args);
  }

  IncomingInvoice_put(args: IncomingInvoice_putArgs): Promise<IncomingInvoice_putResponse> {
    return this.callOperation<IncomingInvoice_putResponse>(OPERATION_DEFINITIONS.IncomingInvoice_put, args);
  }

  IncomingInvoice_putWithMeta(args: IncomingInvoice_putArgs): Promise<ApiResult<IncomingInvoice_putResponse>> {
    return this.callOperationWithMeta<IncomingInvoice_putResponse>(OPERATION_DEFINITIONS.IncomingInvoice_put, args);
  }

  IncomingInvoiceAddPayment_addPayment(args: IncomingInvoiceAddPayment_addPaymentArgs): Promise<IncomingInvoiceAddPayment_addPaymentResponse> {
    return this.callOperation<IncomingInvoiceAddPayment_addPaymentResponse>(OPERATION_DEFINITIONS.IncomingInvoiceAddPayment_addPayment, args);
  }

  IncomingInvoiceAddPayment_addPaymentWithMeta(args: IncomingInvoiceAddPayment_addPaymentArgs): Promise<ApiResult<IncomingInvoiceAddPayment_addPaymentResponse>> {
    return this.callOperationWithMeta<IncomingInvoiceAddPayment_addPaymentResponse>(OPERATION_DEFINITIONS.IncomingInvoiceAddPayment_addPayment, args);
  }

  IncomingInvoiceSearch_search(args: IncomingInvoiceSearch_searchArgs = {}): Promise<IncomingInvoiceSearch_searchResponse> {
    return this.callOperation<IncomingInvoiceSearch_searchResponse>(OPERATION_DEFINITIONS.IncomingInvoiceSearch_search, args);
  }

  IncomingInvoiceSearch_searchWithMeta(args: IncomingInvoiceSearch_searchArgs = {}): Promise<ApiResult<IncomingInvoiceSearch_searchResponse>> {
    return this.callOperationWithMeta<IncomingInvoiceSearch_searchResponse>(OPERATION_DEFINITIONS.IncomingInvoiceSearch_search, args);
  }

}

export class InternalResource extends BaseClient {
  InternalDebtCollector_get(args: InternalDebtCollector_getArgs = {}): Promise<InternalDebtCollector_getResponse> {
    return this.callOperation<InternalDebtCollector_getResponse>(OPERATION_DEFINITIONS.InternalDebtCollector_get, args);
  }

  InternalDebtCollector_getWithMeta(args: InternalDebtCollector_getArgs = {}): Promise<ApiResult<InternalDebtCollector_getResponse>> {
    return this.callOperationWithMeta<InternalDebtCollector_getResponse>(OPERATION_DEFINITIONS.InternalDebtCollector_get, args);
  }

  InternalDebtCollectorDeactivate_deactivate(args: InternalDebtCollectorDeactivate_deactivateArgs = {}): Promise<InternalDebtCollectorDeactivate_deactivateResponse> {
    return this.callOperation<InternalDebtCollectorDeactivate_deactivateResponse>(OPERATION_DEFINITIONS.InternalDebtCollectorDeactivate_deactivate, args);
  }

  InternalDebtCollectorDeactivate_deactivateWithMeta(args: InternalDebtCollectorDeactivate_deactivateArgs = {}): Promise<ApiResult<InternalDebtCollectorDeactivate_deactivateResponse>> {
    return this.callOperationWithMeta<InternalDebtCollectorDeactivate_deactivateResponse>(OPERATION_DEFINITIONS.InternalDebtCollectorDeactivate_deactivate, args);
  }

  InternalNhoAdminAbort_abort(args: InternalNhoAdminAbort_abortArgs = {}): Promise<InternalNhoAdminAbort_abortResponse> {
    return this.callOperation<InternalNhoAdminAbort_abortResponse>(OPERATION_DEFINITIONS.InternalNhoAdminAbort_abort, args);
  }

  InternalNhoAdminAbort_abortWithMeta(args: InternalNhoAdminAbort_abortArgs = {}): Promise<ApiResult<InternalNhoAdminAbort_abortResponse>> {
    return this.callOperationWithMeta<InternalNhoAdminAbort_abortResponse>(OPERATION_DEFINITIONS.InternalNhoAdminAbort_abort, args);
  }

}

export class InventoryResource extends BaseClient {
  Inventory_delete(args: Inventory_deleteArgs): Promise<Inventory_deleteResponse> {
    return this.callOperation<Inventory_deleteResponse>(OPERATION_DEFINITIONS.Inventory_delete, args);
  }

  Inventory_deleteWithMeta(args: Inventory_deleteArgs): Promise<ApiResult<Inventory_deleteResponse>> {
    return this.callOperationWithMeta<Inventory_deleteResponse>(OPERATION_DEFINITIONS.Inventory_delete, args);
  }

  Inventory_get(args: Inventory_getArgs): Promise<Inventory_getResponse> {
    return this.callOperation<Inventory_getResponse>(OPERATION_DEFINITIONS.Inventory_get, args);
  }

  Inventory_getWithMeta(args: Inventory_getArgs): Promise<ApiResult<Inventory_getResponse>> {
    return this.callOperationWithMeta<Inventory_getResponse>(OPERATION_DEFINITIONS.Inventory_get, args);
  }

  Inventory_post(args: Inventory_postArgs): Promise<Inventory_postResponse> {
    return this.callOperation<Inventory_postResponse>(OPERATION_DEFINITIONS.Inventory_post, args);
  }

  Inventory_postWithMeta(args: Inventory_postArgs): Promise<ApiResult<Inventory_postResponse>> {
    return this.callOperationWithMeta<Inventory_postResponse>(OPERATION_DEFINITIONS.Inventory_post, args);
  }

  Inventory_put(args: Inventory_putArgs): Promise<Inventory_putResponse> {
    return this.callOperation<Inventory_putResponse>(OPERATION_DEFINITIONS.Inventory_put, args);
  }

  Inventory_putWithMeta(args: Inventory_putArgs): Promise<ApiResult<Inventory_putResponse>> {
    return this.callOperationWithMeta<Inventory_putResponse>(OPERATION_DEFINITIONS.Inventory_put, args);
  }

  Inventory_search(args: Inventory_searchArgs = {}): Promise<Inventory_searchResponse> {
    return this.callOperation<Inventory_searchResponse>(OPERATION_DEFINITIONS.Inventory_search, args);
  }

  Inventory_searchWithMeta(args: Inventory_searchArgs = {}): Promise<ApiResult<Inventory_searchResponse>> {
    return this.callOperationWithMeta<Inventory_searchResponse>(OPERATION_DEFINITIONS.Inventory_search, args);
  }

  InventoryInventories_search(args: InventoryInventories_searchArgs = {}): Promise<InventoryInventories_searchResponse> {
    return this.callOperation<InventoryInventories_searchResponse>(OPERATION_DEFINITIONS.InventoryInventories_search, args);
  }

  InventoryInventories_searchWithMeta(args: InventoryInventories_searchArgs = {}): Promise<ApiResult<InventoryInventories_searchResponse>> {
    return this.callOperationWithMeta<InventoryInventories_searchResponse>(OPERATION_DEFINITIONS.InventoryInventories_search, args);
  }

  InventoryLocation_delete(args: InventoryLocation_deleteArgs): Promise<InventoryLocation_deleteResponse> {
    return this.callOperation<InventoryLocation_deleteResponse>(OPERATION_DEFINITIONS.InventoryLocation_delete, args);
  }

  InventoryLocation_deleteWithMeta(args: InventoryLocation_deleteArgs): Promise<ApiResult<InventoryLocation_deleteResponse>> {
    return this.callOperationWithMeta<InventoryLocation_deleteResponse>(OPERATION_DEFINITIONS.InventoryLocation_delete, args);
  }

  InventoryLocation_get(args: InventoryLocation_getArgs): Promise<InventoryLocation_getResponse> {
    return this.callOperation<InventoryLocation_getResponse>(OPERATION_DEFINITIONS.InventoryLocation_get, args);
  }

  InventoryLocation_getWithMeta(args: InventoryLocation_getArgs): Promise<ApiResult<InventoryLocation_getResponse>> {
    return this.callOperationWithMeta<InventoryLocation_getResponse>(OPERATION_DEFINITIONS.InventoryLocation_get, args);
  }

  InventoryLocation_post(args: InventoryLocation_postArgs): Promise<InventoryLocation_postResponse> {
    return this.callOperation<InventoryLocation_postResponse>(OPERATION_DEFINITIONS.InventoryLocation_post, args);
  }

  InventoryLocation_postWithMeta(args: InventoryLocation_postArgs): Promise<ApiResult<InventoryLocation_postResponse>> {
    return this.callOperationWithMeta<InventoryLocation_postResponse>(OPERATION_DEFINITIONS.InventoryLocation_post, args);
  }

  InventoryLocation_put(args: InventoryLocation_putArgs): Promise<InventoryLocation_putResponse> {
    return this.callOperation<InventoryLocation_putResponse>(OPERATION_DEFINITIONS.InventoryLocation_put, args);
  }

  InventoryLocation_putWithMeta(args: InventoryLocation_putArgs): Promise<ApiResult<InventoryLocation_putResponse>> {
    return this.callOperationWithMeta<InventoryLocation_putResponse>(OPERATION_DEFINITIONS.InventoryLocation_put, args);
  }

  InventoryLocation_search(args: InventoryLocation_searchArgs = {}): Promise<InventoryLocation_searchResponse> {
    return this.callOperation<InventoryLocation_searchResponse>(OPERATION_DEFINITIONS.InventoryLocation_search, args);
  }

  InventoryLocation_searchWithMeta(args: InventoryLocation_searchArgs = {}): Promise<ApiResult<InventoryLocation_searchResponse>> {
    return this.callOperationWithMeta<InventoryLocation_searchResponse>(OPERATION_DEFINITIONS.InventoryLocation_search, args);
  }

  InventoryLocationList_deleteByIds(args: InventoryLocationList_deleteByIdsArgs = {}): Promise<InventoryLocationList_deleteByIdsResponse> {
    return this.callOperation<InventoryLocationList_deleteByIdsResponse>(OPERATION_DEFINITIONS.InventoryLocationList_deleteByIds, args);
  }

  InventoryLocationList_deleteByIdsWithMeta(args: InventoryLocationList_deleteByIdsArgs = {}): Promise<ApiResult<InventoryLocationList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<InventoryLocationList_deleteByIdsResponse>(OPERATION_DEFINITIONS.InventoryLocationList_deleteByIds, args);
  }

  InventoryLocationList_postList(args: InventoryLocationList_postListArgs): Promise<InventoryLocationList_postListResponse> {
    return this.callOperation<InventoryLocationList_postListResponse>(OPERATION_DEFINITIONS.InventoryLocationList_postList, args);
  }

  InventoryLocationList_postListWithMeta(args: InventoryLocationList_postListArgs): Promise<ApiResult<InventoryLocationList_postListResponse>> {
    return this.callOperationWithMeta<InventoryLocationList_postListResponse>(OPERATION_DEFINITIONS.InventoryLocationList_postList, args);
  }

  InventoryLocationList_putList(args: InventoryLocationList_putListArgs): Promise<InventoryLocationList_putListResponse> {
    return this.callOperation<InventoryLocationList_putListResponse>(OPERATION_DEFINITIONS.InventoryLocationList_putList, args);
  }

  InventoryLocationList_putListWithMeta(args: InventoryLocationList_putListArgs): Promise<ApiResult<InventoryLocationList_putListResponse>> {
    return this.callOperationWithMeta<InventoryLocationList_putListResponse>(OPERATION_DEFINITIONS.InventoryLocationList_putList, args);
  }

  InventoryStocktaking_delete(args: InventoryStocktaking_deleteArgs): Promise<InventoryStocktaking_deleteResponse> {
    return this.callOperation<InventoryStocktaking_deleteResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_delete, args);
  }

  InventoryStocktaking_deleteWithMeta(args: InventoryStocktaking_deleteArgs): Promise<ApiResult<InventoryStocktaking_deleteResponse>> {
    return this.callOperationWithMeta<InventoryStocktaking_deleteResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_delete, args);
  }

  InventoryStocktaking_get(args: InventoryStocktaking_getArgs): Promise<InventoryStocktaking_getResponse> {
    return this.callOperation<InventoryStocktaking_getResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_get, args);
  }

  InventoryStocktaking_getWithMeta(args: InventoryStocktaking_getArgs): Promise<ApiResult<InventoryStocktaking_getResponse>> {
    return this.callOperationWithMeta<InventoryStocktaking_getResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_get, args);
  }

  InventoryStocktaking_post(args: InventoryStocktaking_postArgs): Promise<InventoryStocktaking_postResponse> {
    return this.callOperation<InventoryStocktaking_postResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_post, args);
  }

  InventoryStocktaking_postWithMeta(args: InventoryStocktaking_postArgs): Promise<ApiResult<InventoryStocktaking_postResponse>> {
    return this.callOperationWithMeta<InventoryStocktaking_postResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_post, args);
  }

  InventoryStocktaking_put(args: InventoryStocktaking_putArgs): Promise<InventoryStocktaking_putResponse> {
    return this.callOperation<InventoryStocktaking_putResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_put, args);
  }

  InventoryStocktaking_putWithMeta(args: InventoryStocktaking_putArgs): Promise<ApiResult<InventoryStocktaking_putResponse>> {
    return this.callOperationWithMeta<InventoryStocktaking_putResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_put, args);
  }

  InventoryStocktaking_search(args: InventoryStocktaking_searchArgs = {}): Promise<InventoryStocktaking_searchResponse> {
    return this.callOperation<InventoryStocktaking_searchResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_search, args);
  }

  InventoryStocktaking_searchWithMeta(args: InventoryStocktaking_searchArgs = {}): Promise<ApiResult<InventoryStocktaking_searchResponse>> {
    return this.callOperationWithMeta<InventoryStocktaking_searchResponse>(OPERATION_DEFINITIONS.InventoryStocktaking_search, args);
  }

  InventoryStocktakingProductline_delete(args: InventoryStocktakingProductline_deleteArgs): Promise<InventoryStocktakingProductline_deleteResponse> {
    return this.callOperation<InventoryStocktakingProductline_deleteResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_delete, args);
  }

  InventoryStocktakingProductline_deleteWithMeta(args: InventoryStocktakingProductline_deleteArgs): Promise<ApiResult<InventoryStocktakingProductline_deleteResponse>> {
    return this.callOperationWithMeta<InventoryStocktakingProductline_deleteResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_delete, args);
  }

  InventoryStocktakingProductline_get(args: InventoryStocktakingProductline_getArgs): Promise<InventoryStocktakingProductline_getResponse> {
    return this.callOperation<InventoryStocktakingProductline_getResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_get, args);
  }

  InventoryStocktakingProductline_getWithMeta(args: InventoryStocktakingProductline_getArgs): Promise<ApiResult<InventoryStocktakingProductline_getResponse>> {
    return this.callOperationWithMeta<InventoryStocktakingProductline_getResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_get, args);
  }

  InventoryStocktakingProductline_post(args: InventoryStocktakingProductline_postArgs): Promise<InventoryStocktakingProductline_postResponse> {
    return this.callOperation<InventoryStocktakingProductline_postResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_post, args);
  }

  InventoryStocktakingProductline_postWithMeta(args: InventoryStocktakingProductline_postArgs): Promise<ApiResult<InventoryStocktakingProductline_postResponse>> {
    return this.callOperationWithMeta<InventoryStocktakingProductline_postResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_post, args);
  }

  InventoryStocktakingProductline_put(args: InventoryStocktakingProductline_putArgs): Promise<InventoryStocktakingProductline_putResponse> {
    return this.callOperation<InventoryStocktakingProductline_putResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_put, args);
  }

  InventoryStocktakingProductline_putWithMeta(args: InventoryStocktakingProductline_putArgs): Promise<ApiResult<InventoryStocktakingProductline_putResponse>> {
    return this.callOperationWithMeta<InventoryStocktakingProductline_putResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_put, args);
  }

  InventoryStocktakingProductline_search(args: InventoryStocktakingProductline_searchArgs = {}): Promise<InventoryStocktakingProductline_searchResponse> {
    return this.callOperation<InventoryStocktakingProductline_searchResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_search, args);
  }

  InventoryStocktakingProductline_searchWithMeta(args: InventoryStocktakingProductline_searchArgs = {}): Promise<ApiResult<InventoryStocktakingProductline_searchResponse>> {
    return this.callOperationWithMeta<InventoryStocktakingProductline_searchResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_search, args);
  }

  InventoryStocktakingProductlineChangeLocation_changeLocation(args: InventoryStocktakingProductlineChangeLocation_changeLocationArgs): Promise<InventoryStocktakingProductlineChangeLocation_changeLocationResponse> {
    return this.callOperation<InventoryStocktakingProductlineChangeLocation_changeLocationResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductlineChangeLocation_changeLocation, args);
  }

  InventoryStocktakingProductlineChangeLocation_changeLocationWithMeta(args: InventoryStocktakingProductlineChangeLocation_changeLocationArgs): Promise<ApiResult<InventoryStocktakingProductlineChangeLocation_changeLocationResponse>> {
    return this.callOperationWithMeta<InventoryStocktakingProductlineChangeLocation_changeLocationResponse>(OPERATION_DEFINITIONS.InventoryStocktakingProductlineChangeLocation_changeLocation, args);
  }

}

export class InvoiceResource extends BaseClient {
  Invoice_get(args: Invoice_getArgs): Promise<Invoice_getResponse> {
    return this.callOperation<Invoice_getResponse>(OPERATION_DEFINITIONS.Invoice_get, args);
  }

  Invoice_getWithMeta(args: Invoice_getArgs): Promise<ApiResult<Invoice_getResponse>> {
    return this.callOperationWithMeta<Invoice_getResponse>(OPERATION_DEFINITIONS.Invoice_get, args);
  }

  Invoice_post(args: Invoice_postArgs): Promise<Invoice_postResponse> {
    return this.callOperation<Invoice_postResponse>(OPERATION_DEFINITIONS.Invoice_post, args);
  }

  Invoice_postWithMeta(args: Invoice_postArgs): Promise<ApiResult<Invoice_postResponse>> {
    return this.callOperationWithMeta<Invoice_postResponse>(OPERATION_DEFINITIONS.Invoice_post, args);
  }

  Invoice_search(args: Invoice_searchArgs = {}): Promise<Invoice_searchResponse> {
    return this.callOperation<Invoice_searchResponse>(OPERATION_DEFINITIONS.Invoice_search, args);
  }

  Invoice_searchWithMeta(args: Invoice_searchArgs = {}): Promise<ApiResult<Invoice_searchResponse>> {
    return this.callOperationWithMeta<Invoice_searchResponse>(OPERATION_DEFINITIONS.Invoice_search, args);
  }

  InvoiceCreateCreditNote_createCreditNote(args: InvoiceCreateCreditNote_createCreditNoteArgs): Promise<InvoiceCreateCreditNote_createCreditNoteResponse> {
    return this.callOperation<InvoiceCreateCreditNote_createCreditNoteResponse>(OPERATION_DEFINITIONS.InvoiceCreateCreditNote_createCreditNote, args);
  }

  InvoiceCreateCreditNote_createCreditNoteWithMeta(args: InvoiceCreateCreditNote_createCreditNoteArgs): Promise<ApiResult<InvoiceCreateCreditNote_createCreditNoteResponse>> {
    return this.callOperationWithMeta<InvoiceCreateCreditNote_createCreditNoteResponse>(OPERATION_DEFINITIONS.InvoiceCreateCreditNote_createCreditNote, args);
  }

  InvoiceCreateReminder_createReminder(args: InvoiceCreateReminder_createReminderArgs): Promise<InvoiceCreateReminder_createReminderResponse> {
    return this.callOperation<InvoiceCreateReminder_createReminderResponse>(OPERATION_DEFINITIONS.InvoiceCreateReminder_createReminder, args);
  }

  InvoiceCreateReminder_createReminderWithMeta(args: InvoiceCreateReminder_createReminderArgs): Promise<ApiResult<InvoiceCreateReminder_createReminderResponse>> {
    return this.callOperationWithMeta<InvoiceCreateReminder_createReminderResponse>(OPERATION_DEFINITIONS.InvoiceCreateReminder_createReminder, args);
  }

  InvoiceDetails_get(args: InvoiceDetails_getArgs): Promise<InvoiceDetails_getResponse> {
    return this.callOperation<InvoiceDetails_getResponse>(OPERATION_DEFINITIONS.InvoiceDetails_get, args);
  }

  InvoiceDetails_getWithMeta(args: InvoiceDetails_getArgs): Promise<ApiResult<InvoiceDetails_getResponse>> {
    return this.callOperationWithMeta<InvoiceDetails_getResponse>(OPERATION_DEFINITIONS.InvoiceDetails_get, args);
  }

  InvoiceDetails_search(args: InvoiceDetails_searchArgs = {}): Promise<InvoiceDetails_searchResponse> {
    return this.callOperation<InvoiceDetails_searchResponse>(OPERATION_DEFINITIONS.InvoiceDetails_search, args);
  }

  InvoiceDetails_searchWithMeta(args: InvoiceDetails_searchArgs = {}): Promise<ApiResult<InvoiceDetails_searchResponse>> {
    return this.callOperationWithMeta<InvoiceDetails_searchResponse>(OPERATION_DEFINITIONS.InvoiceDetails_search, args);
  }

  InvoiceList_postList(args: InvoiceList_postListArgs): Promise<InvoiceList_postListResponse> {
    return this.callOperation<InvoiceList_postListResponse>(OPERATION_DEFINITIONS.InvoiceList_postList, args);
  }

  InvoiceList_postListWithMeta(args: InvoiceList_postListArgs): Promise<ApiResult<InvoiceList_postListResponse>> {
    return this.callOperationWithMeta<InvoiceList_postListResponse>(OPERATION_DEFINITIONS.InvoiceList_postList, args);
  }

  InvoicePayment_payment(args: InvoicePayment_paymentArgs): Promise<InvoicePayment_paymentResponse> {
    return this.callOperation<InvoicePayment_paymentResponse>(OPERATION_DEFINITIONS.InvoicePayment_payment, args);
  }

  InvoicePayment_paymentWithMeta(args: InvoicePayment_paymentArgs): Promise<ApiResult<InvoicePayment_paymentResponse>> {
    return this.callOperationWithMeta<InvoicePayment_paymentResponse>(OPERATION_DEFINITIONS.InvoicePayment_payment, args);
  }

  InvoicePaymentType_get(args: InvoicePaymentType_getArgs): Promise<InvoicePaymentType_getResponse> {
    return this.callOperation<InvoicePaymentType_getResponse>(OPERATION_DEFINITIONS.InvoicePaymentType_get, args);
  }

  InvoicePaymentType_getWithMeta(args: InvoicePaymentType_getArgs): Promise<ApiResult<InvoicePaymentType_getResponse>> {
    return this.callOperationWithMeta<InvoicePaymentType_getResponse>(OPERATION_DEFINITIONS.InvoicePaymentType_get, args);
  }

  InvoicePaymentType_search(args: InvoicePaymentType_searchArgs = {}): Promise<InvoicePaymentType_searchResponse> {
    return this.callOperation<InvoicePaymentType_searchResponse>(OPERATION_DEFINITIONS.InvoicePaymentType_search, args);
  }

  InvoicePaymentType_searchWithMeta(args: InvoicePaymentType_searchArgs = {}): Promise<ApiResult<InvoicePaymentType_searchResponse>> {
    return this.callOperationWithMeta<InvoicePaymentType_searchResponse>(OPERATION_DEFINITIONS.InvoicePaymentType_search, args);
  }

  InvoicePdf_downloadPdf(args: InvoicePdf_downloadPdfArgs): Promise<InvoicePdf_downloadPdfResponse> {
    return this.callOperation<InvoicePdf_downloadPdfResponse>(OPERATION_DEFINITIONS.InvoicePdf_downloadPdf, args);
  }

  InvoicePdf_downloadPdfWithMeta(args: InvoicePdf_downloadPdfArgs): Promise<ApiResult<InvoicePdf_downloadPdfResponse>> {
    return this.callOperationWithMeta<InvoicePdf_downloadPdfResponse>(OPERATION_DEFINITIONS.InvoicePdf_downloadPdf, args);
  }

  InvoiceSend_send(args: InvoiceSend_sendArgs): Promise<InvoiceSend_sendResponse> {
    return this.callOperation<InvoiceSend_sendResponse>(OPERATION_DEFINITIONS.InvoiceSend_send, args);
  }

  InvoiceSend_sendWithMeta(args: InvoiceSend_sendArgs): Promise<ApiResult<InvoiceSend_sendResponse>> {
    return this.callOperationWithMeta<InvoiceSend_sendResponse>(OPERATION_DEFINITIONS.InvoiceSend_send, args);
  }

}

export class InvoiceRemarkResource extends BaseClient {
  InvoiceRemark_get(args: InvoiceRemark_getArgs): Promise<InvoiceRemark_getResponse> {
    return this.callOperation<InvoiceRemark_getResponse>(OPERATION_DEFINITIONS.InvoiceRemark_get, args);
  }

  InvoiceRemark_getWithMeta(args: InvoiceRemark_getArgs): Promise<ApiResult<InvoiceRemark_getResponse>> {
    return this.callOperationWithMeta<InvoiceRemark_getResponse>(OPERATION_DEFINITIONS.InvoiceRemark_get, args);
  }

}

export class LedgerResource extends BaseClient {
  Ledger_search(args: Ledger_searchArgs = {}): Promise<Ledger_searchResponse> {
    return this.callOperation<Ledger_searchResponse>(OPERATION_DEFINITIONS.Ledger_search, args);
  }

  Ledger_searchWithMeta(args: Ledger_searchArgs = {}): Promise<ApiResult<Ledger_searchResponse>> {
    return this.callOperationWithMeta<Ledger_searchResponse>(OPERATION_DEFINITIONS.Ledger_search, args);
  }

  LedgerAccount_delete(args: LedgerAccount_deleteArgs): Promise<LedgerAccount_deleteResponse> {
    return this.callOperation<LedgerAccount_deleteResponse>(OPERATION_DEFINITIONS.LedgerAccount_delete, args);
  }

  LedgerAccount_deleteWithMeta(args: LedgerAccount_deleteArgs): Promise<ApiResult<LedgerAccount_deleteResponse>> {
    return this.callOperationWithMeta<LedgerAccount_deleteResponse>(OPERATION_DEFINITIONS.LedgerAccount_delete, args);
  }

  LedgerAccount_get(args: LedgerAccount_getArgs): Promise<LedgerAccount_getResponse> {
    return this.callOperation<LedgerAccount_getResponse>(OPERATION_DEFINITIONS.LedgerAccount_get, args);
  }

  LedgerAccount_getWithMeta(args: LedgerAccount_getArgs): Promise<ApiResult<LedgerAccount_getResponse>> {
    return this.callOperationWithMeta<LedgerAccount_getResponse>(OPERATION_DEFINITIONS.LedgerAccount_get, args);
  }

  LedgerAccount_post(args: LedgerAccount_postArgs): Promise<LedgerAccount_postResponse> {
    return this.callOperation<LedgerAccount_postResponse>(OPERATION_DEFINITIONS.LedgerAccount_post, args);
  }

  LedgerAccount_postWithMeta(args: LedgerAccount_postArgs): Promise<ApiResult<LedgerAccount_postResponse>> {
    return this.callOperationWithMeta<LedgerAccount_postResponse>(OPERATION_DEFINITIONS.LedgerAccount_post, args);
  }

  LedgerAccount_put(args: LedgerAccount_putArgs): Promise<LedgerAccount_putResponse> {
    return this.callOperation<LedgerAccount_putResponse>(OPERATION_DEFINITIONS.LedgerAccount_put, args);
  }

  LedgerAccount_putWithMeta(args: LedgerAccount_putArgs): Promise<ApiResult<LedgerAccount_putResponse>> {
    return this.callOperationWithMeta<LedgerAccount_putResponse>(OPERATION_DEFINITIONS.LedgerAccount_put, args);
  }

  LedgerAccount_search(args: LedgerAccount_searchArgs = {}): Promise<LedgerAccount_searchResponse> {
    return this.callOperation<LedgerAccount_searchResponse>(OPERATION_DEFINITIONS.LedgerAccount_search, args);
  }

  LedgerAccount_searchWithMeta(args: LedgerAccount_searchArgs = {}): Promise<ApiResult<LedgerAccount_searchResponse>> {
    return this.callOperationWithMeta<LedgerAccount_searchResponse>(OPERATION_DEFINITIONS.LedgerAccount_search, args);
  }

  LedgerAccountingDimensionName_delete(args: LedgerAccountingDimensionName_deleteArgs): Promise<LedgerAccountingDimensionName_deleteResponse> {
    return this.callOperation<LedgerAccountingDimensionName_deleteResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_delete, args);
  }

  LedgerAccountingDimensionName_deleteWithMeta(args: LedgerAccountingDimensionName_deleteArgs): Promise<ApiResult<LedgerAccountingDimensionName_deleteResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionName_deleteResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_delete, args);
  }

  LedgerAccountingDimensionName_get(args: LedgerAccountingDimensionName_getArgs): Promise<LedgerAccountingDimensionName_getResponse> {
    return this.callOperation<LedgerAccountingDimensionName_getResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_get, args);
  }

  LedgerAccountingDimensionName_getWithMeta(args: LedgerAccountingDimensionName_getArgs): Promise<ApiResult<LedgerAccountingDimensionName_getResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionName_getResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_get, args);
  }

  LedgerAccountingDimensionName_getAll(args: LedgerAccountingDimensionName_getAllArgs = {}): Promise<LedgerAccountingDimensionName_getAllResponse> {
    return this.callOperation<LedgerAccountingDimensionName_getAllResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_getAll, args);
  }

  LedgerAccountingDimensionName_getAllWithMeta(args: LedgerAccountingDimensionName_getAllArgs = {}): Promise<ApiResult<LedgerAccountingDimensionName_getAllResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionName_getAllResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_getAll, args);
  }

  LedgerAccountingDimensionName_post(args: LedgerAccountingDimensionName_postArgs): Promise<LedgerAccountingDimensionName_postResponse> {
    return this.callOperation<LedgerAccountingDimensionName_postResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_post, args);
  }

  LedgerAccountingDimensionName_postWithMeta(args: LedgerAccountingDimensionName_postArgs): Promise<ApiResult<LedgerAccountingDimensionName_postResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionName_postResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_post, args);
  }

  LedgerAccountingDimensionName_put(args: LedgerAccountingDimensionName_putArgs): Promise<LedgerAccountingDimensionName_putResponse> {
    return this.callOperation<LedgerAccountingDimensionName_putResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_put, args);
  }

  LedgerAccountingDimensionName_putWithMeta(args: LedgerAccountingDimensionName_putArgs): Promise<ApiResult<LedgerAccountingDimensionName_putResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionName_putResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_put, args);
  }

  LedgerAccountingDimensionNameSearch_search(args: LedgerAccountingDimensionNameSearch_searchArgs = {}): Promise<LedgerAccountingDimensionNameSearch_searchResponse> {
    return this.callOperation<LedgerAccountingDimensionNameSearch_searchResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionNameSearch_search, args);
  }

  LedgerAccountingDimensionNameSearch_searchWithMeta(args: LedgerAccountingDimensionNameSearch_searchArgs = {}): Promise<ApiResult<LedgerAccountingDimensionNameSearch_searchResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionNameSearch_searchResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionNameSearch_search, args);
  }

  LedgerAccountingDimensionValue_delete(args: LedgerAccountingDimensionValue_deleteArgs): Promise<LedgerAccountingDimensionValue_deleteResponse> {
    return this.callOperation<LedgerAccountingDimensionValue_deleteResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_delete, args);
  }

  LedgerAccountingDimensionValue_deleteWithMeta(args: LedgerAccountingDimensionValue_deleteArgs): Promise<ApiResult<LedgerAccountingDimensionValue_deleteResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionValue_deleteResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_delete, args);
  }

  LedgerAccountingDimensionValue_get(args: LedgerAccountingDimensionValue_getArgs): Promise<LedgerAccountingDimensionValue_getResponse> {
    return this.callOperation<LedgerAccountingDimensionValue_getResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_get, args);
  }

  LedgerAccountingDimensionValue_getWithMeta(args: LedgerAccountingDimensionValue_getArgs): Promise<ApiResult<LedgerAccountingDimensionValue_getResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionValue_getResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_get, args);
  }

  LedgerAccountingDimensionValue_post(args: LedgerAccountingDimensionValue_postArgs): Promise<LedgerAccountingDimensionValue_postResponse> {
    return this.callOperation<LedgerAccountingDimensionValue_postResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_post, args);
  }

  LedgerAccountingDimensionValue_postWithMeta(args: LedgerAccountingDimensionValue_postArgs): Promise<ApiResult<LedgerAccountingDimensionValue_postResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionValue_postResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_post, args);
  }

  LedgerAccountingDimensionValueList_putList(args: LedgerAccountingDimensionValueList_putListArgs = {}): Promise<LedgerAccountingDimensionValueList_putListResponse> {
    return this.callOperation<LedgerAccountingDimensionValueList_putListResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValueList_putList, args);
  }

  LedgerAccountingDimensionValueList_putListWithMeta(args: LedgerAccountingDimensionValueList_putListArgs = {}): Promise<ApiResult<LedgerAccountingDimensionValueList_putListResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionValueList_putListResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValueList_putList, args);
  }

  LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues(args: LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesArgs = {}): Promise<LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesResponse> {
    return this.callOperation<LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues, args);
  }

  LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesWithMeta(args: LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesArgs = {}): Promise<ApiResult<LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesResponse>> {
    return this.callOperationWithMeta<LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesResponse>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues, args);
  }

  LedgerAccountingPeriod_get(args: LedgerAccountingPeriod_getArgs): Promise<LedgerAccountingPeriod_getResponse> {
    return this.callOperation<LedgerAccountingPeriod_getResponse>(OPERATION_DEFINITIONS.LedgerAccountingPeriod_get, args);
  }

  LedgerAccountingPeriod_getWithMeta(args: LedgerAccountingPeriod_getArgs): Promise<ApiResult<LedgerAccountingPeriod_getResponse>> {
    return this.callOperationWithMeta<LedgerAccountingPeriod_getResponse>(OPERATION_DEFINITIONS.LedgerAccountingPeriod_get, args);
  }

  LedgerAccountingPeriod_search(args: LedgerAccountingPeriod_searchArgs = {}): Promise<LedgerAccountingPeriod_searchResponse> {
    return this.callOperation<LedgerAccountingPeriod_searchResponse>(OPERATION_DEFINITIONS.LedgerAccountingPeriod_search, args);
  }

  LedgerAccountingPeriod_searchWithMeta(args: LedgerAccountingPeriod_searchArgs = {}): Promise<ApiResult<LedgerAccountingPeriod_searchResponse>> {
    return this.callOperationWithMeta<LedgerAccountingPeriod_searchResponse>(OPERATION_DEFINITIONS.LedgerAccountingPeriod_search, args);
  }

  LedgerAccountList_deleteByIds(args: LedgerAccountList_deleteByIdsArgs = {}): Promise<LedgerAccountList_deleteByIdsResponse> {
    return this.callOperation<LedgerAccountList_deleteByIdsResponse>(OPERATION_DEFINITIONS.LedgerAccountList_deleteByIds, args);
  }

  LedgerAccountList_deleteByIdsWithMeta(args: LedgerAccountList_deleteByIdsArgs = {}): Promise<ApiResult<LedgerAccountList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<LedgerAccountList_deleteByIdsResponse>(OPERATION_DEFINITIONS.LedgerAccountList_deleteByIds, args);
  }

  LedgerAccountList_postList(args: LedgerAccountList_postListArgs): Promise<LedgerAccountList_postListResponse> {
    return this.callOperation<LedgerAccountList_postListResponse>(OPERATION_DEFINITIONS.LedgerAccountList_postList, args);
  }

  LedgerAccountList_postListWithMeta(args: LedgerAccountList_postListArgs): Promise<ApiResult<LedgerAccountList_postListResponse>> {
    return this.callOperationWithMeta<LedgerAccountList_postListResponse>(OPERATION_DEFINITIONS.LedgerAccountList_postList, args);
  }

  LedgerAccountList_putList(args: LedgerAccountList_putListArgs): Promise<LedgerAccountList_putListResponse> {
    return this.callOperation<LedgerAccountList_putListResponse>(OPERATION_DEFINITIONS.LedgerAccountList_putList, args);
  }

  LedgerAccountList_putListWithMeta(args: LedgerAccountList_putListArgs): Promise<ApiResult<LedgerAccountList_putListResponse>> {
    return this.callOperationWithMeta<LedgerAccountList_putListResponse>(OPERATION_DEFINITIONS.LedgerAccountList_putList, args);
  }

  LedgerAnnualAccount_get(args: LedgerAnnualAccount_getArgs): Promise<LedgerAnnualAccount_getResponse> {
    return this.callOperation<LedgerAnnualAccount_getResponse>(OPERATION_DEFINITIONS.LedgerAnnualAccount_get, args);
  }

  LedgerAnnualAccount_getWithMeta(args: LedgerAnnualAccount_getArgs): Promise<ApiResult<LedgerAnnualAccount_getResponse>> {
    return this.callOperationWithMeta<LedgerAnnualAccount_getResponse>(OPERATION_DEFINITIONS.LedgerAnnualAccount_get, args);
  }

  LedgerAnnualAccount_search(args: LedgerAnnualAccount_searchArgs = {}): Promise<LedgerAnnualAccount_searchResponse> {
    return this.callOperation<LedgerAnnualAccount_searchResponse>(OPERATION_DEFINITIONS.LedgerAnnualAccount_search, args);
  }

  LedgerAnnualAccount_searchWithMeta(args: LedgerAnnualAccount_searchArgs = {}): Promise<ApiResult<LedgerAnnualAccount_searchResponse>> {
    return this.callOperationWithMeta<LedgerAnnualAccount_searchResponse>(OPERATION_DEFINITIONS.LedgerAnnualAccount_search, args);
  }

  LedgerCloseGroup_get(args: LedgerCloseGroup_getArgs): Promise<LedgerCloseGroup_getResponse> {
    return this.callOperation<LedgerCloseGroup_getResponse>(OPERATION_DEFINITIONS.LedgerCloseGroup_get, args);
  }

  LedgerCloseGroup_getWithMeta(args: LedgerCloseGroup_getArgs): Promise<ApiResult<LedgerCloseGroup_getResponse>> {
    return this.callOperationWithMeta<LedgerCloseGroup_getResponse>(OPERATION_DEFINITIONS.LedgerCloseGroup_get, args);
  }

  LedgerCloseGroup_search(args: LedgerCloseGroup_searchArgs = {}): Promise<LedgerCloseGroup_searchResponse> {
    return this.callOperation<LedgerCloseGroup_searchResponse>(OPERATION_DEFINITIONS.LedgerCloseGroup_search, args);
  }

  LedgerCloseGroup_searchWithMeta(args: LedgerCloseGroup_searchArgs = {}): Promise<ApiResult<LedgerCloseGroup_searchResponse>> {
    return this.callOperationWithMeta<LedgerCloseGroup_searchResponse>(OPERATION_DEFINITIONS.LedgerCloseGroup_search, args);
  }

  LedgerOpenPost_openPost(args: LedgerOpenPost_openPostArgs = {}): Promise<LedgerOpenPost_openPostResponse> {
    return this.callOperation<LedgerOpenPost_openPostResponse>(OPERATION_DEFINITIONS.LedgerOpenPost_openPost, args);
  }

  LedgerOpenPost_openPostWithMeta(args: LedgerOpenPost_openPostArgs = {}): Promise<ApiResult<LedgerOpenPost_openPostResponse>> {
    return this.callOperationWithMeta<LedgerOpenPost_openPostResponse>(OPERATION_DEFINITIONS.LedgerOpenPost_openPost, args);
  }

  LedgerPaymentTypeOut_delete(args: LedgerPaymentTypeOut_deleteArgs): Promise<LedgerPaymentTypeOut_deleteResponse> {
    return this.callOperation<LedgerPaymentTypeOut_deleteResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_delete, args);
  }

  LedgerPaymentTypeOut_deleteWithMeta(args: LedgerPaymentTypeOut_deleteArgs): Promise<ApiResult<LedgerPaymentTypeOut_deleteResponse>> {
    return this.callOperationWithMeta<LedgerPaymentTypeOut_deleteResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_delete, args);
  }

  LedgerPaymentTypeOut_get(args: LedgerPaymentTypeOut_getArgs): Promise<LedgerPaymentTypeOut_getResponse> {
    return this.callOperation<LedgerPaymentTypeOut_getResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_get, args);
  }

  LedgerPaymentTypeOut_getWithMeta(args: LedgerPaymentTypeOut_getArgs): Promise<ApiResult<LedgerPaymentTypeOut_getResponse>> {
    return this.callOperationWithMeta<LedgerPaymentTypeOut_getResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_get, args);
  }

  LedgerPaymentTypeOut_post(args: LedgerPaymentTypeOut_postArgs): Promise<LedgerPaymentTypeOut_postResponse> {
    return this.callOperation<LedgerPaymentTypeOut_postResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_post, args);
  }

  LedgerPaymentTypeOut_postWithMeta(args: LedgerPaymentTypeOut_postArgs): Promise<ApiResult<LedgerPaymentTypeOut_postResponse>> {
    return this.callOperationWithMeta<LedgerPaymentTypeOut_postResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_post, args);
  }

  LedgerPaymentTypeOut_put(args: LedgerPaymentTypeOut_putArgs): Promise<LedgerPaymentTypeOut_putResponse> {
    return this.callOperation<LedgerPaymentTypeOut_putResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_put, args);
  }

  LedgerPaymentTypeOut_putWithMeta(args: LedgerPaymentTypeOut_putArgs): Promise<ApiResult<LedgerPaymentTypeOut_putResponse>> {
    return this.callOperationWithMeta<LedgerPaymentTypeOut_putResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_put, args);
  }

  LedgerPaymentTypeOut_search(args: LedgerPaymentTypeOut_searchArgs = {}): Promise<LedgerPaymentTypeOut_searchResponse> {
    return this.callOperation<LedgerPaymentTypeOut_searchResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_search, args);
  }

  LedgerPaymentTypeOut_searchWithMeta(args: LedgerPaymentTypeOut_searchArgs = {}): Promise<ApiResult<LedgerPaymentTypeOut_searchResponse>> {
    return this.callOperationWithMeta<LedgerPaymentTypeOut_searchResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_search, args);
  }

  LedgerPaymentTypeOutList_postList(args: LedgerPaymentTypeOutList_postListArgs): Promise<LedgerPaymentTypeOutList_postListResponse> {
    return this.callOperation<LedgerPaymentTypeOutList_postListResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOutList_postList, args);
  }

  LedgerPaymentTypeOutList_postListWithMeta(args: LedgerPaymentTypeOutList_postListArgs): Promise<ApiResult<LedgerPaymentTypeOutList_postListResponse>> {
    return this.callOperationWithMeta<LedgerPaymentTypeOutList_postListResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOutList_postList, args);
  }

  LedgerPaymentTypeOutList_putList(args: LedgerPaymentTypeOutList_putListArgs): Promise<LedgerPaymentTypeOutList_putListResponse> {
    return this.callOperation<LedgerPaymentTypeOutList_putListResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOutList_putList, args);
  }

  LedgerPaymentTypeOutList_putListWithMeta(args: LedgerPaymentTypeOutList_putListArgs): Promise<ApiResult<LedgerPaymentTypeOutList_putListResponse>> {
    return this.callOperationWithMeta<LedgerPaymentTypeOutList_putListResponse>(OPERATION_DEFINITIONS.LedgerPaymentTypeOutList_putList, args);
  }

  LedgerPosting_get(args: LedgerPosting_getArgs): Promise<LedgerPosting_getResponse> {
    return this.callOperation<LedgerPosting_getResponse>(OPERATION_DEFINITIONS.LedgerPosting_get, args);
  }

  LedgerPosting_getWithMeta(args: LedgerPosting_getArgs): Promise<ApiResult<LedgerPosting_getResponse>> {
    return this.callOperationWithMeta<LedgerPosting_getResponse>(OPERATION_DEFINITIONS.LedgerPosting_get, args);
  }

  LedgerPosting_search(args: LedgerPosting_searchArgs = {}): Promise<LedgerPosting_searchResponse> {
    return this.callOperation<LedgerPosting_searchResponse>(OPERATION_DEFINITIONS.LedgerPosting_search, args);
  }

  LedgerPosting_searchWithMeta(args: LedgerPosting_searchArgs = {}): Promise<ApiResult<LedgerPosting_searchResponse>> {
    return this.callOperationWithMeta<LedgerPosting_searchResponse>(OPERATION_DEFINITIONS.LedgerPosting_search, args);
  }

  LedgerPostingByDate_get(args: LedgerPostingByDate_getArgs = {}): Promise<LedgerPostingByDate_getResponse> {
    return this.callOperation<LedgerPostingByDate_getResponse>(OPERATION_DEFINITIONS.LedgerPostingByDate_get, args);
  }

  LedgerPostingByDate_getWithMeta(args: LedgerPostingByDate_getArgs = {}): Promise<ApiResult<LedgerPostingByDate_getResponse>> {
    return this.callOperationWithMeta<LedgerPostingByDate_getResponse>(OPERATION_DEFINITIONS.LedgerPostingByDate_get, args);
  }

  LedgerPostingClosePostings_closePostings(args: LedgerPostingClosePostings_closePostingsArgs): Promise<LedgerPostingClosePostings_closePostingsResponse> {
    return this.callOperation<LedgerPostingClosePostings_closePostingsResponse>(OPERATION_DEFINITIONS.LedgerPostingClosePostings_closePostings, args);
  }

  LedgerPostingClosePostings_closePostingsWithMeta(args: LedgerPostingClosePostings_closePostingsArgs): Promise<ApiResult<LedgerPostingClosePostings_closePostingsResponse>> {
    return this.callOperationWithMeta<LedgerPostingClosePostings_closePostingsResponse>(OPERATION_DEFINITIONS.LedgerPostingClosePostings_closePostings, args);
  }

  LedgerPostingOpenPost_openPost(args: LedgerPostingOpenPost_openPostArgs = {}): Promise<LedgerPostingOpenPost_openPostResponse> {
    return this.callOperation<LedgerPostingOpenPost_openPostResponse>(OPERATION_DEFINITIONS.LedgerPostingOpenPost_openPost, args);
  }

  LedgerPostingOpenPost_openPostWithMeta(args: LedgerPostingOpenPost_openPostArgs = {}): Promise<ApiResult<LedgerPostingOpenPost_openPostResponse>> {
    return this.callOperationWithMeta<LedgerPostingOpenPost_openPostResponse>(OPERATION_DEFINITIONS.LedgerPostingOpenPost_openPost, args);
  }

  LedgerPostingRules_get(args: LedgerPostingRules_getArgs = {}): Promise<LedgerPostingRules_getResponse> {
    return this.callOperation<LedgerPostingRules_getResponse>(OPERATION_DEFINITIONS.LedgerPostingRules_get, args);
  }

  LedgerPostingRules_getWithMeta(args: LedgerPostingRules_getArgs = {}): Promise<ApiResult<LedgerPostingRules_getResponse>> {
    return this.callOperationWithMeta<LedgerPostingRules_getResponse>(OPERATION_DEFINITIONS.LedgerPostingRules_get, args);
  }

  LedgerVatSettings_get(args: LedgerVatSettings_getArgs = {}): Promise<LedgerVatSettings_getResponse> {
    return this.callOperation<LedgerVatSettings_getResponse>(OPERATION_DEFINITIONS.LedgerVatSettings_get, args);
  }

  LedgerVatSettings_getWithMeta(args: LedgerVatSettings_getArgs = {}): Promise<ApiResult<LedgerVatSettings_getResponse>> {
    return this.callOperationWithMeta<LedgerVatSettings_getResponse>(OPERATION_DEFINITIONS.LedgerVatSettings_get, args);
  }

  LedgerVatSettings_put(args: LedgerVatSettings_putArgs): Promise<LedgerVatSettings_putResponse> {
    return this.callOperation<LedgerVatSettings_putResponse>(OPERATION_DEFINITIONS.LedgerVatSettings_put, args);
  }

  LedgerVatSettings_putWithMeta(args: LedgerVatSettings_putArgs): Promise<ApiResult<LedgerVatSettings_putResponse>> {
    return this.callOperationWithMeta<LedgerVatSettings_putResponse>(OPERATION_DEFINITIONS.LedgerVatSettings_put, args);
  }

  LedgerVatType_get(args: LedgerVatType_getArgs): Promise<LedgerVatType_getResponse> {
    return this.callOperation<LedgerVatType_getResponse>(OPERATION_DEFINITIONS.LedgerVatType_get, args);
  }

  LedgerVatType_getWithMeta(args: LedgerVatType_getArgs): Promise<ApiResult<LedgerVatType_getResponse>> {
    return this.callOperationWithMeta<LedgerVatType_getResponse>(OPERATION_DEFINITIONS.LedgerVatType_get, args);
  }

  LedgerVatType_search(args: LedgerVatType_searchArgs = {}): Promise<LedgerVatType_searchResponse> {
    return this.callOperation<LedgerVatType_searchResponse>(OPERATION_DEFINITIONS.LedgerVatType_search, args);
  }

  LedgerVatType_searchWithMeta(args: LedgerVatType_searchArgs = {}): Promise<ApiResult<LedgerVatType_searchResponse>> {
    return this.callOperationWithMeta<LedgerVatType_searchResponse>(OPERATION_DEFINITIONS.LedgerVatType_search, args);
  }

  LedgerVatTypeCreateRelativeVatType_createRelativeVatType(args: LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeArgs = {}): Promise<LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeResponse> {
    return this.callOperation<LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeResponse>(OPERATION_DEFINITIONS.LedgerVatTypeCreateRelativeVatType_createRelativeVatType, args);
  }

  LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeWithMeta(args: LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeArgs = {}): Promise<ApiResult<LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeResponse>> {
    return this.callOperationWithMeta<LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeResponse>(OPERATION_DEFINITIONS.LedgerVatTypeCreateRelativeVatType_createRelativeVatType, args);
  }

  LedgerVoucher_delete(args: LedgerVoucher_deleteArgs): Promise<LedgerVoucher_deleteResponse> {
    return this.callOperation<LedgerVoucher_deleteResponse>(OPERATION_DEFINITIONS.LedgerVoucher_delete, args);
  }

  LedgerVoucher_deleteWithMeta(args: LedgerVoucher_deleteArgs): Promise<ApiResult<LedgerVoucher_deleteResponse>> {
    return this.callOperationWithMeta<LedgerVoucher_deleteResponse>(OPERATION_DEFINITIONS.LedgerVoucher_delete, args);
  }

  LedgerVoucher_get(args: LedgerVoucher_getArgs): Promise<LedgerVoucher_getResponse> {
    return this.callOperation<LedgerVoucher_getResponse>(OPERATION_DEFINITIONS.LedgerVoucher_get, args);
  }

  LedgerVoucher_getWithMeta(args: LedgerVoucher_getArgs): Promise<ApiResult<LedgerVoucher_getResponse>> {
    return this.callOperationWithMeta<LedgerVoucher_getResponse>(OPERATION_DEFINITIONS.LedgerVoucher_get, args);
  }

  LedgerVoucher_post(args: LedgerVoucher_postArgs): Promise<LedgerVoucher_postResponse> {
    return this.callOperation<LedgerVoucher_postResponse>(OPERATION_DEFINITIONS.LedgerVoucher_post, args);
  }

  LedgerVoucher_postWithMeta(args: LedgerVoucher_postArgs): Promise<ApiResult<LedgerVoucher_postResponse>> {
    return this.callOperationWithMeta<LedgerVoucher_postResponse>(OPERATION_DEFINITIONS.LedgerVoucher_post, args);
  }

  LedgerVoucher_put(args: LedgerVoucher_putArgs): Promise<LedgerVoucher_putResponse> {
    return this.callOperation<LedgerVoucher_putResponse>(OPERATION_DEFINITIONS.LedgerVoucher_put, args);
  }

  LedgerVoucher_putWithMeta(args: LedgerVoucher_putArgs): Promise<ApiResult<LedgerVoucher_putResponse>> {
    return this.callOperationWithMeta<LedgerVoucher_putResponse>(OPERATION_DEFINITIONS.LedgerVoucher_put, args);
  }

  LedgerVoucher_search(args: LedgerVoucher_searchArgs = {}): Promise<LedgerVoucher_searchResponse> {
    return this.callOperation<LedgerVoucher_searchResponse>(OPERATION_DEFINITIONS.LedgerVoucher_search, args);
  }

  LedgerVoucher_searchWithMeta(args: LedgerVoucher_searchArgs = {}): Promise<ApiResult<LedgerVoucher_searchResponse>> {
    return this.callOperationWithMeta<LedgerVoucher_searchResponse>(OPERATION_DEFINITIONS.LedgerVoucher_search, args);
  }

  LedgerVoucherAttachment_deleteAttachment(args: LedgerVoucherAttachment_deleteAttachmentArgs): Promise<LedgerVoucherAttachment_deleteAttachmentResponse> {
    return this.callOperation<LedgerVoucherAttachment_deleteAttachmentResponse>(OPERATION_DEFINITIONS.LedgerVoucherAttachment_deleteAttachment, args);
  }

  LedgerVoucherAttachment_deleteAttachmentWithMeta(args: LedgerVoucherAttachment_deleteAttachmentArgs): Promise<ApiResult<LedgerVoucherAttachment_deleteAttachmentResponse>> {
    return this.callOperationWithMeta<LedgerVoucherAttachment_deleteAttachmentResponse>(OPERATION_DEFINITIONS.LedgerVoucherAttachment_deleteAttachment, args);
  }

  LedgerVoucherAttachment_uploadAttachment(args: LedgerVoucherAttachment_uploadAttachmentArgs): Promise<LedgerVoucherAttachment_uploadAttachmentResponse> {
    return this.callOperation<LedgerVoucherAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.LedgerVoucherAttachment_uploadAttachment, args);
  }

  LedgerVoucherAttachment_uploadAttachmentWithMeta(args: LedgerVoucherAttachment_uploadAttachmentArgs): Promise<ApiResult<LedgerVoucherAttachment_uploadAttachmentResponse>> {
    return this.callOperationWithMeta<LedgerVoucherAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.LedgerVoucherAttachment_uploadAttachment, args);
  }

  LedgerVoucherExternalVoucherNumber_externalVoucherNumber(args: LedgerVoucherExternalVoucherNumber_externalVoucherNumberArgs = {}): Promise<LedgerVoucherExternalVoucherNumber_externalVoucherNumberResponse> {
    return this.callOperation<LedgerVoucherExternalVoucherNumber_externalVoucherNumberResponse>(OPERATION_DEFINITIONS.LedgerVoucherExternalVoucherNumber_externalVoucherNumber, args);
  }

  LedgerVoucherExternalVoucherNumber_externalVoucherNumberWithMeta(args: LedgerVoucherExternalVoucherNumber_externalVoucherNumberArgs = {}): Promise<ApiResult<LedgerVoucherExternalVoucherNumber_externalVoucherNumberResponse>> {
    return this.callOperationWithMeta<LedgerVoucherExternalVoucherNumber_externalVoucherNumberResponse>(OPERATION_DEFINITIONS.LedgerVoucherExternalVoucherNumber_externalVoucherNumber, args);
  }

  LedgerVoucherHistoricalAttachment_uploadAttachment(args: LedgerVoucherHistoricalAttachment_uploadAttachmentArgs): Promise<LedgerVoucherHistoricalAttachment_uploadAttachmentResponse> {
    return this.callOperation<LedgerVoucherHistoricalAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalAttachment_uploadAttachment, args);
  }

  LedgerVoucherHistoricalAttachment_uploadAttachmentWithMeta(args: LedgerVoucherHistoricalAttachment_uploadAttachmentArgs): Promise<ApiResult<LedgerVoucherHistoricalAttachment_uploadAttachmentResponse>> {
    return this.callOperationWithMeta<LedgerVoucherHistoricalAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalAttachment_uploadAttachment, args);
  }

  LedgerVoucherHistoricalClosePostings_closePostings(args: LedgerVoucherHistoricalClosePostings_closePostingsArgs = {}): Promise<LedgerVoucherHistoricalClosePostings_closePostingsResponse> {
    return this.callOperation<LedgerVoucherHistoricalClosePostings_closePostingsResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalClosePostings_closePostings, args);
  }

  LedgerVoucherHistoricalClosePostings_closePostingsWithMeta(args: LedgerVoucherHistoricalClosePostings_closePostingsArgs = {}): Promise<ApiResult<LedgerVoucherHistoricalClosePostings_closePostingsResponse>> {
    return this.callOperationWithMeta<LedgerVoucherHistoricalClosePostings_closePostingsResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalClosePostings_closePostings, args);
  }

  LedgerVoucherHistoricalEmployee_postEmployee(args: LedgerVoucherHistoricalEmployee_postEmployeeArgs): Promise<LedgerVoucherHistoricalEmployee_postEmployeeResponse> {
    return this.callOperation<LedgerVoucherHistoricalEmployee_postEmployeeResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalEmployee_postEmployee, args);
  }

  LedgerVoucherHistoricalEmployee_postEmployeeWithMeta(args: LedgerVoucherHistoricalEmployee_postEmployeeArgs): Promise<ApiResult<LedgerVoucherHistoricalEmployee_postEmployeeResponse>> {
    return this.callOperationWithMeta<LedgerVoucherHistoricalEmployee_postEmployeeResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalEmployee_postEmployee, args);
  }

  LedgerVoucherHistoricalHistorical_postHistorical(args: LedgerVoucherHistoricalHistorical_postHistoricalArgs): Promise<LedgerVoucherHistoricalHistorical_postHistoricalResponse> {
    return this.callOperation<LedgerVoucherHistoricalHistorical_postHistoricalResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalHistorical_postHistorical, args);
  }

  LedgerVoucherHistoricalHistorical_postHistoricalWithMeta(args: LedgerVoucherHistoricalHistorical_postHistoricalArgs): Promise<ApiResult<LedgerVoucherHistoricalHistorical_postHistoricalResponse>> {
    return this.callOperationWithMeta<LedgerVoucherHistoricalHistorical_postHistoricalResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalHistorical_postHistorical, args);
  }

  LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers(args: LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersArgs = {}): Promise<LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersResponse> {
    return this.callOperation<LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers, args);
  }

  LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersWithMeta(args: LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersArgs = {}): Promise<ApiResult<LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersResponse>> {
    return this.callOperationWithMeta<LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersResponse>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers, args);
  }

  LedgerVoucherImportDocument_importDocument(args: LedgerVoucherImportDocument_importDocumentArgs = {}): Promise<LedgerVoucherImportDocument_importDocumentResponse> {
    return this.callOperation<LedgerVoucherImportDocument_importDocumentResponse>(OPERATION_DEFINITIONS.LedgerVoucherImportDocument_importDocument, args);
  }

  LedgerVoucherImportDocument_importDocumentWithMeta(args: LedgerVoucherImportDocument_importDocumentArgs = {}): Promise<ApiResult<LedgerVoucherImportDocument_importDocumentResponse>> {
    return this.callOperationWithMeta<LedgerVoucherImportDocument_importDocumentResponse>(OPERATION_DEFINITIONS.LedgerVoucherImportDocument_importDocument, args);
  }

  LedgerVoucherImportGbat10_importGbat10(args: LedgerVoucherImportGbat10_importGbat10Args = {}): Promise<LedgerVoucherImportGbat10_importGbat10Response> {
    return this.callOperation<LedgerVoucherImportGbat10_importGbat10Response>(OPERATION_DEFINITIONS.LedgerVoucherImportGbat10_importGbat10, args);
  }

  LedgerVoucherImportGbat10_importGbat10WithMeta(args: LedgerVoucherImportGbat10_importGbat10Args = {}): Promise<ApiResult<LedgerVoucherImportGbat10_importGbat10Response>> {
    return this.callOperationWithMeta<LedgerVoucherImportGbat10_importGbat10Response>(OPERATION_DEFINITIONS.LedgerVoucherImportGbat10_importGbat10, args);
  }

  LedgerVoucherList_putList(args: LedgerVoucherList_putListArgs): Promise<LedgerVoucherList_putListResponse> {
    return this.callOperation<LedgerVoucherList_putListResponse>(OPERATION_DEFINITIONS.LedgerVoucherList_putList, args);
  }

  LedgerVoucherList_putListWithMeta(args: LedgerVoucherList_putListArgs): Promise<ApiResult<LedgerVoucherList_putListResponse>> {
    return this.callOperationWithMeta<LedgerVoucherList_putListResponse>(OPERATION_DEFINITIONS.LedgerVoucherList_putList, args);
  }

  LedgerVoucherNonPosted_nonPosted(args: LedgerVoucherNonPosted_nonPostedArgs = {}): Promise<LedgerVoucherNonPosted_nonPostedResponse> {
    return this.callOperation<LedgerVoucherNonPosted_nonPostedResponse>(OPERATION_DEFINITIONS.LedgerVoucherNonPosted_nonPosted, args);
  }

  LedgerVoucherNonPosted_nonPostedWithMeta(args: LedgerVoucherNonPosted_nonPostedArgs = {}): Promise<ApiResult<LedgerVoucherNonPosted_nonPostedResponse>> {
    return this.callOperationWithMeta<LedgerVoucherNonPosted_nonPostedResponse>(OPERATION_DEFINITIONS.LedgerVoucherNonPosted_nonPosted, args);
  }

  LedgerVoucherOpeningBalance_delete(args: LedgerVoucherOpeningBalance_deleteArgs = {}): Promise<LedgerVoucherOpeningBalance_deleteResponse> {
    return this.callOperation<LedgerVoucherOpeningBalance_deleteResponse>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_delete, args);
  }

  LedgerVoucherOpeningBalance_deleteWithMeta(args: LedgerVoucherOpeningBalance_deleteArgs = {}): Promise<ApiResult<LedgerVoucherOpeningBalance_deleteResponse>> {
    return this.callOperationWithMeta<LedgerVoucherOpeningBalance_deleteResponse>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_delete, args);
  }

  LedgerVoucherOpeningBalance_get(args: LedgerVoucherOpeningBalance_getArgs = {}): Promise<LedgerVoucherOpeningBalance_getResponse> {
    return this.callOperation<LedgerVoucherOpeningBalance_getResponse>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_get, args);
  }

  LedgerVoucherOpeningBalance_getWithMeta(args: LedgerVoucherOpeningBalance_getArgs = {}): Promise<ApiResult<LedgerVoucherOpeningBalance_getResponse>> {
    return this.callOperationWithMeta<LedgerVoucherOpeningBalance_getResponse>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_get, args);
  }

  LedgerVoucherOpeningBalance_post(args: LedgerVoucherOpeningBalance_postArgs): Promise<LedgerVoucherOpeningBalance_postResponse> {
    return this.callOperation<LedgerVoucherOpeningBalance_postResponse>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_post, args);
  }

  LedgerVoucherOpeningBalance_postWithMeta(args: LedgerVoucherOpeningBalance_postArgs): Promise<ApiResult<LedgerVoucherOpeningBalance_postResponse>> {
    return this.callOperationWithMeta<LedgerVoucherOpeningBalance_postResponse>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_post, args);
  }

  LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher(args: LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherArgs = {}): Promise<LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherResponse> {
    return this.callOperation<LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherResponse>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher, args);
  }

  LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherWithMeta(args: LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherArgs = {}): Promise<ApiResult<LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherResponse>> {
    return this.callOperationWithMeta<LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherResponse>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher, args);
  }

  LedgerVoucherOptions_options(args: LedgerVoucherOptions_optionsArgs): Promise<LedgerVoucherOptions_optionsResponse> {
    return this.callOperation<LedgerVoucherOptions_optionsResponse>(OPERATION_DEFINITIONS.LedgerVoucherOptions_options, args);
  }

  LedgerVoucherOptions_optionsWithMeta(args: LedgerVoucherOptions_optionsArgs): Promise<ApiResult<LedgerVoucherOptions_optionsResponse>> {
    return this.callOperationWithMeta<LedgerVoucherOptions_optionsResponse>(OPERATION_DEFINITIONS.LedgerVoucherOptions_options, args);
  }

  LedgerVoucherPdf_downloadPdf(args: LedgerVoucherPdf_downloadPdfArgs): Promise<LedgerVoucherPdf_downloadPdfResponse> {
    return this.callOperation<LedgerVoucherPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.LedgerVoucherPdf_downloadPdf, args);
  }

  LedgerVoucherPdf_downloadPdfWithMeta(args: LedgerVoucherPdf_downloadPdfArgs): Promise<ApiResult<LedgerVoucherPdf_downloadPdfResponse>> {
    return this.callOperationWithMeta<LedgerVoucherPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.LedgerVoucherPdf_downloadPdf, args);
  }

  LedgerVoucherPdf_uploadPdf(args: LedgerVoucherPdf_uploadPdfArgs): Promise<LedgerVoucherPdf_uploadPdfResponse> {
    return this.callOperation<LedgerVoucherPdf_uploadPdfResponse>(OPERATION_DEFINITIONS.LedgerVoucherPdf_uploadPdf, args);
  }

  LedgerVoucherPdf_uploadPdfWithMeta(args: LedgerVoucherPdf_uploadPdfArgs): Promise<ApiResult<LedgerVoucherPdf_uploadPdfResponse>> {
    return this.callOperationWithMeta<LedgerVoucherPdf_uploadPdfResponse>(OPERATION_DEFINITIONS.LedgerVoucherPdf_uploadPdf, args);
  }

  LedgerVoucherReverse_reverse(args: LedgerVoucherReverse_reverseArgs): Promise<LedgerVoucherReverse_reverseResponse> {
    return this.callOperation<LedgerVoucherReverse_reverseResponse>(OPERATION_DEFINITIONS.LedgerVoucherReverse_reverse, args);
  }

  LedgerVoucherReverse_reverseWithMeta(args: LedgerVoucherReverse_reverseArgs): Promise<ApiResult<LedgerVoucherReverse_reverseResponse>> {
    return this.callOperationWithMeta<LedgerVoucherReverse_reverseResponse>(OPERATION_DEFINITIONS.LedgerVoucherReverse_reverse, args);
  }

  LedgerVoucherSendToInbox_sendToInbox(args: LedgerVoucherSendToInbox_sendToInboxArgs): Promise<LedgerVoucherSendToInbox_sendToInboxResponse> {
    return this.callOperation<LedgerVoucherSendToInbox_sendToInboxResponse>(OPERATION_DEFINITIONS.LedgerVoucherSendToInbox_sendToInbox, args);
  }

  LedgerVoucherSendToInbox_sendToInboxWithMeta(args: LedgerVoucherSendToInbox_sendToInboxArgs): Promise<ApiResult<LedgerVoucherSendToInbox_sendToInboxResponse>> {
    return this.callOperationWithMeta<LedgerVoucherSendToInbox_sendToInboxResponse>(OPERATION_DEFINITIONS.LedgerVoucherSendToInbox_sendToInbox, args);
  }

  LedgerVoucherSendToLedger_sendToLedger(args: LedgerVoucherSendToLedger_sendToLedgerArgs): Promise<LedgerVoucherSendToLedger_sendToLedgerResponse> {
    return this.callOperation<LedgerVoucherSendToLedger_sendToLedgerResponse>(OPERATION_DEFINITIONS.LedgerVoucherSendToLedger_sendToLedger, args);
  }

  LedgerVoucherSendToLedger_sendToLedgerWithMeta(args: LedgerVoucherSendToLedger_sendToLedgerArgs): Promise<ApiResult<LedgerVoucherSendToLedger_sendToLedgerResponse>> {
    return this.callOperationWithMeta<LedgerVoucherSendToLedger_sendToLedgerResponse>(OPERATION_DEFINITIONS.LedgerVoucherSendToLedger_sendToLedger, args);
  }

  LedgerVoucherType_get(args: LedgerVoucherType_getArgs): Promise<LedgerVoucherType_getResponse> {
    return this.callOperation<LedgerVoucherType_getResponse>(OPERATION_DEFINITIONS.LedgerVoucherType_get, args);
  }

  LedgerVoucherType_getWithMeta(args: LedgerVoucherType_getArgs): Promise<ApiResult<LedgerVoucherType_getResponse>> {
    return this.callOperationWithMeta<LedgerVoucherType_getResponse>(OPERATION_DEFINITIONS.LedgerVoucherType_get, args);
  }

  LedgerVoucherType_search(args: LedgerVoucherType_searchArgs = {}): Promise<LedgerVoucherType_searchResponse> {
    return this.callOperation<LedgerVoucherType_searchResponse>(OPERATION_DEFINITIONS.LedgerVoucherType_search, args);
  }

  LedgerVoucherType_searchWithMeta(args: LedgerVoucherType_searchArgs = {}): Promise<ApiResult<LedgerVoucherType_searchResponse>> {
    return this.callOperationWithMeta<LedgerVoucherType_searchResponse>(OPERATION_DEFINITIONS.LedgerVoucherType_search, args);
  }

  LedgerVoucherVoucherReception_voucherReception(args: LedgerVoucherVoucherReception_voucherReceptionArgs = {}): Promise<LedgerVoucherVoucherReception_voucherReceptionResponse> {
    return this.callOperation<LedgerVoucherVoucherReception_voucherReceptionResponse>(OPERATION_DEFINITIONS.LedgerVoucherVoucherReception_voucherReception, args);
  }

  LedgerVoucherVoucherReception_voucherReceptionWithMeta(args: LedgerVoucherVoucherReception_voucherReceptionArgs = {}): Promise<ApiResult<LedgerVoucherVoucherReception_voucherReceptionResponse>> {
    return this.callOperationWithMeta<LedgerVoucherVoucherReception_voucherReceptionResponse>(OPERATION_DEFINITIONS.LedgerVoucherVoucherReception_voucherReception, args);
  }

}

export class MunicipalityResource extends BaseClient {
  Municipality_search(args: Municipality_searchArgs = {}): Promise<Municipality_searchResponse> {
    return this.callOperation<Municipality_searchResponse>(OPERATION_DEFINITIONS.Municipality_search, args);
  }

  Municipality_searchWithMeta(args: Municipality_searchArgs = {}): Promise<ApiResult<Municipality_searchResponse>> {
    return this.callOperationWithMeta<Municipality_searchResponse>(OPERATION_DEFINITIONS.Municipality_search, args);
  }

  MunicipalityQuery_query(args: MunicipalityQuery_queryArgs = {}): Promise<MunicipalityQuery_queryResponse> {
    return this.callOperation<MunicipalityQuery_queryResponse>(OPERATION_DEFINITIONS.MunicipalityQuery_query, args);
  }

  MunicipalityQuery_queryWithMeta(args: MunicipalityQuery_queryArgs = {}): Promise<ApiResult<MunicipalityQuery_queryResponse>> {
    return this.callOperationWithMeta<MunicipalityQuery_queryResponse>(OPERATION_DEFINITIONS.MunicipalityQuery_query, args);
  }

}

export class OrderResource extends BaseClient {
  Order_delete(args: Order_deleteArgs): Promise<Order_deleteResponse> {
    return this.callOperation<Order_deleteResponse>(OPERATION_DEFINITIONS.Order_delete, args);
  }

  Order_deleteWithMeta(args: Order_deleteArgs): Promise<ApiResult<Order_deleteResponse>> {
    return this.callOperationWithMeta<Order_deleteResponse>(OPERATION_DEFINITIONS.Order_delete, args);
  }

  Order_get(args: Order_getArgs): Promise<Order_getResponse> {
    return this.callOperation<Order_getResponse>(OPERATION_DEFINITIONS.Order_get, args);
  }

  Order_getWithMeta(args: Order_getArgs): Promise<ApiResult<Order_getResponse>> {
    return this.callOperationWithMeta<Order_getResponse>(OPERATION_DEFINITIONS.Order_get, args);
  }

  Order_post(args: Order_postArgs): Promise<Order_postResponse> {
    return this.callOperation<Order_postResponse>(OPERATION_DEFINITIONS.Order_post, args);
  }

  Order_postWithMeta(args: Order_postArgs): Promise<ApiResult<Order_postResponse>> {
    return this.callOperationWithMeta<Order_postResponse>(OPERATION_DEFINITIONS.Order_post, args);
  }

  Order_put(args: Order_putArgs): Promise<Order_putResponse> {
    return this.callOperation<Order_putResponse>(OPERATION_DEFINITIONS.Order_put, args);
  }

  Order_putWithMeta(args: Order_putArgs): Promise<ApiResult<Order_putResponse>> {
    return this.callOperationWithMeta<Order_putResponse>(OPERATION_DEFINITIONS.Order_put, args);
  }

  Order_search(args: Order_searchArgs = {}): Promise<Order_searchResponse> {
    return this.callOperation<Order_searchResponse>(OPERATION_DEFINITIONS.Order_search, args);
  }

  Order_searchWithMeta(args: Order_searchArgs = {}): Promise<ApiResult<Order_searchResponse>> {
    return this.callOperationWithMeta<Order_searchResponse>(OPERATION_DEFINITIONS.Order_search, args);
  }

  OrderApproveSubscriptionInvoice_approveSubscriptionInvoice(args: OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceArgs): Promise<OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceResponse> {
    return this.callOperation<OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceResponse>(OPERATION_DEFINITIONS.OrderApproveSubscriptionInvoice_approveSubscriptionInvoice, args);
  }

  OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceWithMeta(args: OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceArgs): Promise<ApiResult<OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceResponse>> {
    return this.callOperationWithMeta<OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceResponse>(OPERATION_DEFINITIONS.OrderApproveSubscriptionInvoice_approveSubscriptionInvoice, args);
  }

  OrderAttach_attach(args: OrderAttach_attachArgs): Promise<OrderAttach_attachResponse> {
    return this.callOperation<OrderAttach_attachResponse>(OPERATION_DEFINITIONS.OrderAttach_attach, args);
  }

  OrderAttach_attachWithMeta(args: OrderAttach_attachArgs): Promise<ApiResult<OrderAttach_attachResponse>> {
    return this.callOperationWithMeta<OrderAttach_attachResponse>(OPERATION_DEFINITIONS.OrderAttach_attach, args);
  }

  OrderInvoice_invoice(args: OrderInvoice_invoiceArgs): Promise<OrderInvoice_invoiceResponse> {
    return this.callOperation<OrderInvoice_invoiceResponse>(OPERATION_DEFINITIONS.OrderInvoice_invoice, args);
  }

  OrderInvoice_invoiceWithMeta(args: OrderInvoice_invoiceArgs): Promise<ApiResult<OrderInvoice_invoiceResponse>> {
    return this.callOperationWithMeta<OrderInvoice_invoiceResponse>(OPERATION_DEFINITIONS.OrderInvoice_invoice, args);
  }

  OrderInvoiceMultipleOrders_invoiceMultipleOrders(args: OrderInvoiceMultipleOrders_invoiceMultipleOrdersArgs = {}): Promise<OrderInvoiceMultipleOrders_invoiceMultipleOrdersResponse> {
    return this.callOperation<OrderInvoiceMultipleOrders_invoiceMultipleOrdersResponse>(OPERATION_DEFINITIONS.OrderInvoiceMultipleOrders_invoiceMultipleOrders, args);
  }

  OrderInvoiceMultipleOrders_invoiceMultipleOrdersWithMeta(args: OrderInvoiceMultipleOrders_invoiceMultipleOrdersArgs = {}): Promise<ApiResult<OrderInvoiceMultipleOrders_invoiceMultipleOrdersResponse>> {
    return this.callOperationWithMeta<OrderInvoiceMultipleOrders_invoiceMultipleOrdersResponse>(OPERATION_DEFINITIONS.OrderInvoiceMultipleOrders_invoiceMultipleOrders, args);
  }

  OrderList_postList(args: OrderList_postListArgs): Promise<OrderList_postListResponse> {
    return this.callOperation<OrderList_postListResponse>(OPERATION_DEFINITIONS.OrderList_postList, args);
  }

  OrderList_postListWithMeta(args: OrderList_postListArgs): Promise<ApiResult<OrderList_postListResponse>> {
    return this.callOperationWithMeta<OrderList_postListResponse>(OPERATION_DEFINITIONS.OrderList_postList, args);
  }

  OrderOrderConfirmationPdf_downloadPdf(args: OrderOrderConfirmationPdf_downloadPdfArgs): Promise<OrderOrderConfirmationPdf_downloadPdfResponse> {
    return this.callOperation<OrderOrderConfirmationPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.OrderOrderConfirmationPdf_downloadPdf, args);
  }

  OrderOrderConfirmationPdf_downloadPdfWithMeta(args: OrderOrderConfirmationPdf_downloadPdfArgs): Promise<ApiResult<OrderOrderConfirmationPdf_downloadPdfResponse>> {
    return this.callOperationWithMeta<OrderOrderConfirmationPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.OrderOrderConfirmationPdf_downloadPdf, args);
  }

  OrderOrderGroup_delete(args: OrderOrderGroup_deleteArgs): Promise<OrderOrderGroup_deleteResponse> {
    return this.callOperation<OrderOrderGroup_deleteResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_delete, args);
  }

  OrderOrderGroup_deleteWithMeta(args: OrderOrderGroup_deleteArgs): Promise<ApiResult<OrderOrderGroup_deleteResponse>> {
    return this.callOperationWithMeta<OrderOrderGroup_deleteResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_delete, args);
  }

  OrderOrderGroup_get(args: OrderOrderGroup_getArgs): Promise<OrderOrderGroup_getResponse> {
    return this.callOperation<OrderOrderGroup_getResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_get, args);
  }

  OrderOrderGroup_getWithMeta(args: OrderOrderGroup_getArgs): Promise<ApiResult<OrderOrderGroup_getResponse>> {
    return this.callOperationWithMeta<OrderOrderGroup_getResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_get, args);
  }

  OrderOrderGroup_post(args: OrderOrderGroup_postArgs): Promise<OrderOrderGroup_postResponse> {
    return this.callOperation<OrderOrderGroup_postResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_post, args);
  }

  OrderOrderGroup_postWithMeta(args: OrderOrderGroup_postArgs): Promise<ApiResult<OrderOrderGroup_postResponse>> {
    return this.callOperationWithMeta<OrderOrderGroup_postResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_post, args);
  }

  OrderOrderGroup_put(args: OrderOrderGroup_putArgs): Promise<OrderOrderGroup_putResponse> {
    return this.callOperation<OrderOrderGroup_putResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_put, args);
  }

  OrderOrderGroup_putWithMeta(args: OrderOrderGroup_putArgs): Promise<ApiResult<OrderOrderGroup_putResponse>> {
    return this.callOperationWithMeta<OrderOrderGroup_putResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_put, args);
  }

  OrderOrderGroup_search(args: OrderOrderGroup_searchArgs = {}): Promise<OrderOrderGroup_searchResponse> {
    return this.callOperation<OrderOrderGroup_searchResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_search, args);
  }

  OrderOrderGroup_searchWithMeta(args: OrderOrderGroup_searchArgs = {}): Promise<ApiResult<OrderOrderGroup_searchResponse>> {
    return this.callOperationWithMeta<OrderOrderGroup_searchResponse>(OPERATION_DEFINITIONS.OrderOrderGroup_search, args);
  }

  OrderOrderline_delete(args: OrderOrderline_deleteArgs): Promise<OrderOrderline_deleteResponse> {
    return this.callOperation<OrderOrderline_deleteResponse>(OPERATION_DEFINITIONS.OrderOrderline_delete, args);
  }

  OrderOrderline_deleteWithMeta(args: OrderOrderline_deleteArgs): Promise<ApiResult<OrderOrderline_deleteResponse>> {
    return this.callOperationWithMeta<OrderOrderline_deleteResponse>(OPERATION_DEFINITIONS.OrderOrderline_delete, args);
  }

  OrderOrderline_get(args: OrderOrderline_getArgs): Promise<OrderOrderline_getResponse> {
    return this.callOperation<OrderOrderline_getResponse>(OPERATION_DEFINITIONS.OrderOrderline_get, args);
  }

  OrderOrderline_getWithMeta(args: OrderOrderline_getArgs): Promise<ApiResult<OrderOrderline_getResponse>> {
    return this.callOperationWithMeta<OrderOrderline_getResponse>(OPERATION_DEFINITIONS.OrderOrderline_get, args);
  }

  OrderOrderline_post(args: OrderOrderline_postArgs): Promise<OrderOrderline_postResponse> {
    return this.callOperation<OrderOrderline_postResponse>(OPERATION_DEFINITIONS.OrderOrderline_post, args);
  }

  OrderOrderline_postWithMeta(args: OrderOrderline_postArgs): Promise<ApiResult<OrderOrderline_postResponse>> {
    return this.callOperationWithMeta<OrderOrderline_postResponse>(OPERATION_DEFINITIONS.OrderOrderline_post, args);
  }

  OrderOrderline_put(args: OrderOrderline_putArgs): Promise<OrderOrderline_putResponse> {
    return this.callOperation<OrderOrderline_putResponse>(OPERATION_DEFINITIONS.OrderOrderline_put, args);
  }

  OrderOrderline_putWithMeta(args: OrderOrderline_putArgs): Promise<ApiResult<OrderOrderline_putResponse>> {
    return this.callOperationWithMeta<OrderOrderline_putResponse>(OPERATION_DEFINITIONS.OrderOrderline_put, args);
  }

  OrderOrderlineList_postList(args: OrderOrderlineList_postListArgs): Promise<OrderOrderlineList_postListResponse> {
    return this.callOperation<OrderOrderlineList_postListResponse>(OPERATION_DEFINITIONS.OrderOrderlineList_postList, args);
  }

  OrderOrderlineList_postListWithMeta(args: OrderOrderlineList_postListArgs): Promise<ApiResult<OrderOrderlineList_postListResponse>> {
    return this.callOperationWithMeta<OrderOrderlineList_postListResponse>(OPERATION_DEFINITIONS.OrderOrderlineList_postList, args);
  }

  OrderOrderlineOrderLineTemplate_orderLineTemplate(args: OrderOrderlineOrderLineTemplate_orderLineTemplateArgs = {}): Promise<OrderOrderlineOrderLineTemplate_orderLineTemplateResponse> {
    return this.callOperation<OrderOrderlineOrderLineTemplate_orderLineTemplateResponse>(OPERATION_DEFINITIONS.OrderOrderlineOrderLineTemplate_orderLineTemplate, args);
  }

  OrderOrderlineOrderLineTemplate_orderLineTemplateWithMeta(args: OrderOrderlineOrderLineTemplate_orderLineTemplateArgs = {}): Promise<ApiResult<OrderOrderlineOrderLineTemplate_orderLineTemplateResponse>> {
    return this.callOperationWithMeta<OrderOrderlineOrderLineTemplate_orderLineTemplateResponse>(OPERATION_DEFINITIONS.OrderOrderlineOrderLineTemplate_orderLineTemplate, args);
  }

  OrderOrderlinePickLine_pickLine(args: OrderOrderlinePickLine_pickLineArgs): Promise<OrderOrderlinePickLine_pickLineResponse> {
    return this.callOperation<OrderOrderlinePickLine_pickLineResponse>(OPERATION_DEFINITIONS.OrderOrderlinePickLine_pickLine, args);
  }

  OrderOrderlinePickLine_pickLineWithMeta(args: OrderOrderlinePickLine_pickLineArgs): Promise<ApiResult<OrderOrderlinePickLine_pickLineResponse>> {
    return this.callOperationWithMeta<OrderOrderlinePickLine_pickLineResponse>(OPERATION_DEFINITIONS.OrderOrderlinePickLine_pickLine, args);
  }

  OrderOrderlineUnpickLine_unpickLine(args: OrderOrderlineUnpickLine_unpickLineArgs): Promise<OrderOrderlineUnpickLine_unpickLineResponse> {
    return this.callOperation<OrderOrderlineUnpickLine_unpickLineResponse>(OPERATION_DEFINITIONS.OrderOrderlineUnpickLine_unpickLine, args);
  }

  OrderOrderlineUnpickLine_unpickLineWithMeta(args: OrderOrderlineUnpickLine_unpickLineArgs): Promise<ApiResult<OrderOrderlineUnpickLine_unpickLineResponse>> {
    return this.callOperationWithMeta<OrderOrderlineUnpickLine_unpickLineResponse>(OPERATION_DEFINITIONS.OrderOrderlineUnpickLine_unpickLine, args);
  }

  OrderPackingNotePdf_downloadPackingNotePdf(args: OrderPackingNotePdf_downloadPackingNotePdfArgs): Promise<OrderPackingNotePdf_downloadPackingNotePdfResponse> {
    return this.callOperation<OrderPackingNotePdf_downloadPackingNotePdfResponse>(OPERATION_DEFINITIONS.OrderPackingNotePdf_downloadPackingNotePdf, args);
  }

  OrderPackingNotePdf_downloadPackingNotePdfWithMeta(args: OrderPackingNotePdf_downloadPackingNotePdfArgs): Promise<ApiResult<OrderPackingNotePdf_downloadPackingNotePdfResponse>> {
    return this.callOperationWithMeta<OrderPackingNotePdf_downloadPackingNotePdfResponse>(OPERATION_DEFINITIONS.OrderPackingNotePdf_downloadPackingNotePdf, args);
  }

  OrderSendInvoicePreview_postInvoicePreview(args: OrderSendInvoicePreview_postInvoicePreviewArgs): Promise<OrderSendInvoicePreview_postInvoicePreviewResponse> {
    return this.callOperation<OrderSendInvoicePreview_postInvoicePreviewResponse>(OPERATION_DEFINITIONS.OrderSendInvoicePreview_postInvoicePreview, args);
  }

  OrderSendInvoicePreview_postInvoicePreviewWithMeta(args: OrderSendInvoicePreview_postInvoicePreviewArgs): Promise<ApiResult<OrderSendInvoicePreview_postInvoicePreviewResponse>> {
    return this.callOperationWithMeta<OrderSendInvoicePreview_postInvoicePreviewResponse>(OPERATION_DEFINITIONS.OrderSendInvoicePreview_postInvoicePreview, args);
  }

  OrderSendOrderConfirmation_postOrderConfirmation(args: OrderSendOrderConfirmation_postOrderConfirmationArgs): Promise<OrderSendOrderConfirmation_postOrderConfirmationResponse> {
    return this.callOperation<OrderSendOrderConfirmation_postOrderConfirmationResponse>(OPERATION_DEFINITIONS.OrderSendOrderConfirmation_postOrderConfirmation, args);
  }

  OrderSendOrderConfirmation_postOrderConfirmationWithMeta(args: OrderSendOrderConfirmation_postOrderConfirmationArgs): Promise<ApiResult<OrderSendOrderConfirmation_postOrderConfirmationResponse>> {
    return this.callOperationWithMeta<OrderSendOrderConfirmation_postOrderConfirmationResponse>(OPERATION_DEFINITIONS.OrderSendOrderConfirmation_postOrderConfirmation, args);
  }

  OrderSendPackingNote_postPackingNote(args: OrderSendPackingNote_postPackingNoteArgs): Promise<OrderSendPackingNote_postPackingNoteResponse> {
    return this.callOperation<OrderSendPackingNote_postPackingNoteResponse>(OPERATION_DEFINITIONS.OrderSendPackingNote_postPackingNote, args);
  }

  OrderSendPackingNote_postPackingNoteWithMeta(args: OrderSendPackingNote_postPackingNoteArgs): Promise<ApiResult<OrderSendPackingNote_postPackingNoteResponse>> {
    return this.callOperationWithMeta<OrderSendPackingNote_postPackingNoteResponse>(OPERATION_DEFINITIONS.OrderSendPackingNote_postPackingNote, args);
  }

  OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice(args: OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceArgs): Promise<OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceResponse> {
    return this.callOperation<OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceResponse>(OPERATION_DEFINITIONS.OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice, args);
  }

  OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceWithMeta(args: OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceArgs): Promise<ApiResult<OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceResponse>> {
    return this.callOperationWithMeta<OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceResponse>(OPERATION_DEFINITIONS.OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice, args);
  }

}

export class PensionResource extends BaseClient {
  Pension_search(args: Pension_searchArgs = {}): Promise<Pension_searchResponse> {
    return this.callOperation<Pension_searchResponse>(OPERATION_DEFINITIONS.Pension_search, args);
  }

  Pension_searchWithMeta(args: Pension_searchArgs = {}): Promise<ApiResult<Pension_searchResponse>> {
    return this.callOperationWithMeta<Pension_searchResponse>(OPERATION_DEFINITIONS.Pension_search, args);
  }

}

export class PickupPointResource extends BaseClient {
  PickupPoint_get(args: PickupPoint_getArgs): Promise<PickupPoint_getResponse> {
    return this.callOperation<PickupPoint_getResponse>(OPERATION_DEFINITIONS.PickupPoint_get, args);
  }

  PickupPoint_getWithMeta(args: PickupPoint_getArgs): Promise<ApiResult<PickupPoint_getResponse>> {
    return this.callOperationWithMeta<PickupPoint_getResponse>(OPERATION_DEFINITIONS.PickupPoint_get, args);
  }

  PickupPoint_search(args: PickupPoint_searchArgs = {}): Promise<PickupPoint_searchResponse> {
    return this.callOperation<PickupPoint_searchResponse>(OPERATION_DEFINITIONS.PickupPoint_search, args);
  }

  PickupPoint_searchWithMeta(args: PickupPoint_searchArgs = {}): Promise<ApiResult<PickupPoint_searchResponse>> {
    return this.callOperationWithMeta<PickupPoint_searchResponse>(OPERATION_DEFINITIONS.PickupPoint_search, args);
  }

}

export class PlatformAgnosticResource extends BaseClient {
  PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId(args: PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdArgs = {}): Promise<PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdResponse> {
    return this.callOperation<PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdResponse>(OPERATION_DEFINITIONS.PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId, args);
  }

  PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdWithMeta(args: PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdArgs = {}): Promise<ApiResult<PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdResponse>> {
    return this.callOperationWithMeta<PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdResponse>(OPERATION_DEFINITIONS.PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId, args);
  }

}

export class ProductResource extends BaseClient {
  Product_delete(args: Product_deleteArgs): Promise<Product_deleteResponse> {
    return this.callOperation<Product_deleteResponse>(OPERATION_DEFINITIONS.Product_delete, args);
  }

  Product_deleteWithMeta(args: Product_deleteArgs): Promise<ApiResult<Product_deleteResponse>> {
    return this.callOperationWithMeta<Product_deleteResponse>(OPERATION_DEFINITIONS.Product_delete, args);
  }

  Product_get(args: Product_getArgs): Promise<Product_getResponse> {
    return this.callOperation<Product_getResponse>(OPERATION_DEFINITIONS.Product_get, args);
  }

  Product_getWithMeta(args: Product_getArgs): Promise<ApiResult<Product_getResponse>> {
    return this.callOperationWithMeta<Product_getResponse>(OPERATION_DEFINITIONS.Product_get, args);
  }

  Product_post(args: Product_postArgs): Promise<Product_postResponse> {
    return this.callOperation<Product_postResponse>(OPERATION_DEFINITIONS.Product_post, args);
  }

  Product_postWithMeta(args: Product_postArgs): Promise<ApiResult<Product_postResponse>> {
    return this.callOperationWithMeta<Product_postResponse>(OPERATION_DEFINITIONS.Product_post, args);
  }

  Product_put(args: Product_putArgs): Promise<Product_putResponse> {
    return this.callOperation<Product_putResponse>(OPERATION_DEFINITIONS.Product_put, args);
  }

  Product_putWithMeta(args: Product_putArgs): Promise<ApiResult<Product_putResponse>> {
    return this.callOperationWithMeta<Product_putResponse>(OPERATION_DEFINITIONS.Product_put, args);
  }

  Product_search(args: Product_searchArgs = {}): Promise<Product_searchResponse> {
    return this.callOperation<Product_searchResponse>(OPERATION_DEFINITIONS.Product_search, args);
  }

  Product_searchWithMeta(args: Product_searchArgs = {}): Promise<ApiResult<Product_searchResponse>> {
    return this.callOperationWithMeta<Product_searchResponse>(OPERATION_DEFINITIONS.Product_search, args);
  }

  ProductDiscountGroup_get(args: ProductDiscountGroup_getArgs): Promise<ProductDiscountGroup_getResponse> {
    return this.callOperation<ProductDiscountGroup_getResponse>(OPERATION_DEFINITIONS.ProductDiscountGroup_get, args);
  }

  ProductDiscountGroup_getWithMeta(args: ProductDiscountGroup_getArgs): Promise<ApiResult<ProductDiscountGroup_getResponse>> {
    return this.callOperationWithMeta<ProductDiscountGroup_getResponse>(OPERATION_DEFINITIONS.ProductDiscountGroup_get, args);
  }

  ProductDiscountGroup_search(args: ProductDiscountGroup_searchArgs = {}): Promise<ProductDiscountGroup_searchResponse> {
    return this.callOperation<ProductDiscountGroup_searchResponse>(OPERATION_DEFINITIONS.ProductDiscountGroup_search, args);
  }

  ProductDiscountGroup_searchWithMeta(args: ProductDiscountGroup_searchArgs = {}): Promise<ApiResult<ProductDiscountGroup_searchResponse>> {
    return this.callOperationWithMeta<ProductDiscountGroup_searchResponse>(OPERATION_DEFINITIONS.ProductDiscountGroup_search, args);
  }

  ProductExternal_get(args: ProductExternal_getArgs): Promise<ProductExternal_getResponse> {
    return this.callOperation<ProductExternal_getResponse>(OPERATION_DEFINITIONS.ProductExternal_get, args);
  }

  ProductExternal_getWithMeta(args: ProductExternal_getArgs): Promise<ApiResult<ProductExternal_getResponse>> {
    return this.callOperationWithMeta<ProductExternal_getResponse>(OPERATION_DEFINITIONS.ProductExternal_get, args);
  }

  ProductExternal_search(args: ProductExternal_searchArgs = {}): Promise<ProductExternal_searchResponse> {
    return this.callOperation<ProductExternal_searchResponse>(OPERATION_DEFINITIONS.ProductExternal_search, args);
  }

  ProductExternal_searchWithMeta(args: ProductExternal_searchArgs = {}): Promise<ApiResult<ProductExternal_searchResponse>> {
    return this.callOperationWithMeta<ProductExternal_searchResponse>(OPERATION_DEFINITIONS.ProductExternal_search, args);
  }

  ProductGroup_delete(args: ProductGroup_deleteArgs): Promise<ProductGroup_deleteResponse> {
    return this.callOperation<ProductGroup_deleteResponse>(OPERATION_DEFINITIONS.ProductGroup_delete, args);
  }

  ProductGroup_deleteWithMeta(args: ProductGroup_deleteArgs): Promise<ApiResult<ProductGroup_deleteResponse>> {
    return this.callOperationWithMeta<ProductGroup_deleteResponse>(OPERATION_DEFINITIONS.ProductGroup_delete, args);
  }

  ProductGroup_get(args: ProductGroup_getArgs): Promise<ProductGroup_getResponse> {
    return this.callOperation<ProductGroup_getResponse>(OPERATION_DEFINITIONS.ProductGroup_get, args);
  }

  ProductGroup_getWithMeta(args: ProductGroup_getArgs): Promise<ApiResult<ProductGroup_getResponse>> {
    return this.callOperationWithMeta<ProductGroup_getResponse>(OPERATION_DEFINITIONS.ProductGroup_get, args);
  }

  ProductGroup_post(args: ProductGroup_postArgs): Promise<ProductGroup_postResponse> {
    return this.callOperation<ProductGroup_postResponse>(OPERATION_DEFINITIONS.ProductGroup_post, args);
  }

  ProductGroup_postWithMeta(args: ProductGroup_postArgs): Promise<ApiResult<ProductGroup_postResponse>> {
    return this.callOperationWithMeta<ProductGroup_postResponse>(OPERATION_DEFINITIONS.ProductGroup_post, args);
  }

  ProductGroup_put(args: ProductGroup_putArgs): Promise<ProductGroup_putResponse> {
    return this.callOperation<ProductGroup_putResponse>(OPERATION_DEFINITIONS.ProductGroup_put, args);
  }

  ProductGroup_putWithMeta(args: ProductGroup_putArgs): Promise<ApiResult<ProductGroup_putResponse>> {
    return this.callOperationWithMeta<ProductGroup_putResponse>(OPERATION_DEFINITIONS.ProductGroup_put, args);
  }

  ProductGroup_search(args: ProductGroup_searchArgs = {}): Promise<ProductGroup_searchResponse> {
    return this.callOperation<ProductGroup_searchResponse>(OPERATION_DEFINITIONS.ProductGroup_search, args);
  }

  ProductGroup_searchWithMeta(args: ProductGroup_searchArgs = {}): Promise<ApiResult<ProductGroup_searchResponse>> {
    return this.callOperationWithMeta<ProductGroup_searchResponse>(OPERATION_DEFINITIONS.ProductGroup_search, args);
  }

  ProductGroupList_deleteByIds(args: ProductGroupList_deleteByIdsArgs = {}): Promise<ProductGroupList_deleteByIdsResponse> {
    return this.callOperation<ProductGroupList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProductGroupList_deleteByIds, args);
  }

  ProductGroupList_deleteByIdsWithMeta(args: ProductGroupList_deleteByIdsArgs = {}): Promise<ApiResult<ProductGroupList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<ProductGroupList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProductGroupList_deleteByIds, args);
  }

  ProductGroupList_postList(args: ProductGroupList_postListArgs): Promise<ProductGroupList_postListResponse> {
    return this.callOperation<ProductGroupList_postListResponse>(OPERATION_DEFINITIONS.ProductGroupList_postList, args);
  }

  ProductGroupList_postListWithMeta(args: ProductGroupList_postListArgs): Promise<ApiResult<ProductGroupList_postListResponse>> {
    return this.callOperationWithMeta<ProductGroupList_postListResponse>(OPERATION_DEFINITIONS.ProductGroupList_postList, args);
  }

  ProductGroupList_putList(args: ProductGroupList_putListArgs): Promise<ProductGroupList_putListResponse> {
    return this.callOperation<ProductGroupList_putListResponse>(OPERATION_DEFINITIONS.ProductGroupList_putList, args);
  }

  ProductGroupList_putListWithMeta(args: ProductGroupList_putListArgs): Promise<ApiResult<ProductGroupList_putListResponse>> {
    return this.callOperationWithMeta<ProductGroupList_putListResponse>(OPERATION_DEFINITIONS.ProductGroupList_putList, args);
  }

  ProductGroupQuery_query(args: ProductGroupQuery_queryArgs = {}): Promise<ProductGroupQuery_queryResponse> {
    return this.callOperation<ProductGroupQuery_queryResponse>(OPERATION_DEFINITIONS.ProductGroupQuery_query, args);
  }

  ProductGroupQuery_queryWithMeta(args: ProductGroupQuery_queryArgs = {}): Promise<ApiResult<ProductGroupQuery_queryResponse>> {
    return this.callOperationWithMeta<ProductGroupQuery_queryResponse>(OPERATION_DEFINITIONS.ProductGroupQuery_query, args);
  }

  ProductGroupRelation_delete(args: ProductGroupRelation_deleteArgs): Promise<ProductGroupRelation_deleteResponse> {
    return this.callOperation<ProductGroupRelation_deleteResponse>(OPERATION_DEFINITIONS.ProductGroupRelation_delete, args);
  }

  ProductGroupRelation_deleteWithMeta(args: ProductGroupRelation_deleteArgs): Promise<ApiResult<ProductGroupRelation_deleteResponse>> {
    return this.callOperationWithMeta<ProductGroupRelation_deleteResponse>(OPERATION_DEFINITIONS.ProductGroupRelation_delete, args);
  }

  ProductGroupRelation_get(args: ProductGroupRelation_getArgs): Promise<ProductGroupRelation_getResponse> {
    return this.callOperation<ProductGroupRelation_getResponse>(OPERATION_DEFINITIONS.ProductGroupRelation_get, args);
  }

  ProductGroupRelation_getWithMeta(args: ProductGroupRelation_getArgs): Promise<ApiResult<ProductGroupRelation_getResponse>> {
    return this.callOperationWithMeta<ProductGroupRelation_getResponse>(OPERATION_DEFINITIONS.ProductGroupRelation_get, args);
  }

  ProductGroupRelation_post(args: ProductGroupRelation_postArgs): Promise<ProductGroupRelation_postResponse> {
    return this.callOperation<ProductGroupRelation_postResponse>(OPERATION_DEFINITIONS.ProductGroupRelation_post, args);
  }

  ProductGroupRelation_postWithMeta(args: ProductGroupRelation_postArgs): Promise<ApiResult<ProductGroupRelation_postResponse>> {
    return this.callOperationWithMeta<ProductGroupRelation_postResponse>(OPERATION_DEFINITIONS.ProductGroupRelation_post, args);
  }

  ProductGroupRelation_search(args: ProductGroupRelation_searchArgs = {}): Promise<ProductGroupRelation_searchResponse> {
    return this.callOperation<ProductGroupRelation_searchResponse>(OPERATION_DEFINITIONS.ProductGroupRelation_search, args);
  }

  ProductGroupRelation_searchWithMeta(args: ProductGroupRelation_searchArgs = {}): Promise<ApiResult<ProductGroupRelation_searchResponse>> {
    return this.callOperationWithMeta<ProductGroupRelation_searchResponse>(OPERATION_DEFINITIONS.ProductGroupRelation_search, args);
  }

  ProductGroupRelationList_deleteList(args: ProductGroupRelationList_deleteListArgs): Promise<ProductGroupRelationList_deleteListResponse> {
    return this.callOperation<ProductGroupRelationList_deleteListResponse>(OPERATION_DEFINITIONS.ProductGroupRelationList_deleteList, args);
  }

  ProductGroupRelationList_deleteListWithMeta(args: ProductGroupRelationList_deleteListArgs): Promise<ApiResult<ProductGroupRelationList_deleteListResponse>> {
    return this.callOperationWithMeta<ProductGroupRelationList_deleteListResponse>(OPERATION_DEFINITIONS.ProductGroupRelationList_deleteList, args);
  }

  ProductGroupRelationList_postList(args: ProductGroupRelationList_postListArgs): Promise<ProductGroupRelationList_postListResponse> {
    return this.callOperation<ProductGroupRelationList_postListResponse>(OPERATION_DEFINITIONS.ProductGroupRelationList_postList, args);
  }

  ProductGroupRelationList_postListWithMeta(args: ProductGroupRelationList_postListArgs): Promise<ApiResult<ProductGroupRelationList_postListResponse>> {
    return this.callOperationWithMeta<ProductGroupRelationList_postListResponse>(OPERATION_DEFINITIONS.ProductGroupRelationList_postList, args);
  }

  ProductImage_deleteImage(args: ProductImage_deleteImageArgs): Promise<ProductImage_deleteImageResponse> {
    return this.callOperation<ProductImage_deleteImageResponse>(OPERATION_DEFINITIONS.ProductImage_deleteImage, args);
  }

  ProductImage_deleteImageWithMeta(args: ProductImage_deleteImageArgs): Promise<ApiResult<ProductImage_deleteImageResponse>> {
    return this.callOperationWithMeta<ProductImage_deleteImageResponse>(OPERATION_DEFINITIONS.ProductImage_deleteImage, args);
  }

  ProductImage_uploadImage(args: ProductImage_uploadImageArgs): Promise<ProductImage_uploadImageResponse> {
    return this.callOperation<ProductImage_uploadImageResponse>(OPERATION_DEFINITIONS.ProductImage_uploadImage, args);
  }

  ProductImage_uploadImageWithMeta(args: ProductImage_uploadImageArgs): Promise<ApiResult<ProductImage_uploadImageResponse>> {
    return this.callOperationWithMeta<ProductImage_uploadImageResponse>(OPERATION_DEFINITIONS.ProductImage_uploadImage, args);
  }

  ProductInventoryLocation_delete(args: ProductInventoryLocation_deleteArgs): Promise<ProductInventoryLocation_deleteResponse> {
    return this.callOperation<ProductInventoryLocation_deleteResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_delete, args);
  }

  ProductInventoryLocation_deleteWithMeta(args: ProductInventoryLocation_deleteArgs): Promise<ApiResult<ProductInventoryLocation_deleteResponse>> {
    return this.callOperationWithMeta<ProductInventoryLocation_deleteResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_delete, args);
  }

  ProductInventoryLocation_get(args: ProductInventoryLocation_getArgs): Promise<ProductInventoryLocation_getResponse> {
    return this.callOperation<ProductInventoryLocation_getResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_get, args);
  }

  ProductInventoryLocation_getWithMeta(args: ProductInventoryLocation_getArgs): Promise<ApiResult<ProductInventoryLocation_getResponse>> {
    return this.callOperationWithMeta<ProductInventoryLocation_getResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_get, args);
  }

  ProductInventoryLocation_post(args: ProductInventoryLocation_postArgs): Promise<ProductInventoryLocation_postResponse> {
    return this.callOperation<ProductInventoryLocation_postResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_post, args);
  }

  ProductInventoryLocation_postWithMeta(args: ProductInventoryLocation_postArgs): Promise<ApiResult<ProductInventoryLocation_postResponse>> {
    return this.callOperationWithMeta<ProductInventoryLocation_postResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_post, args);
  }

  ProductInventoryLocation_put(args: ProductInventoryLocation_putArgs): Promise<ProductInventoryLocation_putResponse> {
    return this.callOperation<ProductInventoryLocation_putResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_put, args);
  }

  ProductInventoryLocation_putWithMeta(args: ProductInventoryLocation_putArgs): Promise<ApiResult<ProductInventoryLocation_putResponse>> {
    return this.callOperationWithMeta<ProductInventoryLocation_putResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_put, args);
  }

  ProductInventoryLocation_search(args: ProductInventoryLocation_searchArgs = {}): Promise<ProductInventoryLocation_searchResponse> {
    return this.callOperation<ProductInventoryLocation_searchResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_search, args);
  }

  ProductInventoryLocation_searchWithMeta(args: ProductInventoryLocation_searchArgs = {}): Promise<ApiResult<ProductInventoryLocation_searchResponse>> {
    return this.callOperationWithMeta<ProductInventoryLocation_searchResponse>(OPERATION_DEFINITIONS.ProductInventoryLocation_search, args);
  }

  ProductInventoryLocationList_postList(args: ProductInventoryLocationList_postListArgs): Promise<ProductInventoryLocationList_postListResponse> {
    return this.callOperation<ProductInventoryLocationList_postListResponse>(OPERATION_DEFINITIONS.ProductInventoryLocationList_postList, args);
  }

  ProductInventoryLocationList_postListWithMeta(args: ProductInventoryLocationList_postListArgs): Promise<ApiResult<ProductInventoryLocationList_postListResponse>> {
    return this.callOperationWithMeta<ProductInventoryLocationList_postListResponse>(OPERATION_DEFINITIONS.ProductInventoryLocationList_postList, args);
  }

  ProductInventoryLocationList_putList(args: ProductInventoryLocationList_putListArgs): Promise<ProductInventoryLocationList_putListResponse> {
    return this.callOperation<ProductInventoryLocationList_putListResponse>(OPERATION_DEFINITIONS.ProductInventoryLocationList_putList, args);
  }

  ProductInventoryLocationList_putListWithMeta(args: ProductInventoryLocationList_putListArgs): Promise<ApiResult<ProductInventoryLocationList_putListResponse>> {
    return this.callOperationWithMeta<ProductInventoryLocationList_putListResponse>(OPERATION_DEFINITIONS.ProductInventoryLocationList_putList, args);
  }

  ProductList_postList(args: ProductList_postListArgs): Promise<ProductList_postListResponse> {
    return this.callOperation<ProductList_postListResponse>(OPERATION_DEFINITIONS.ProductList_postList, args);
  }

  ProductList_postListWithMeta(args: ProductList_postListArgs): Promise<ApiResult<ProductList_postListResponse>> {
    return this.callOperationWithMeta<ProductList_postListResponse>(OPERATION_DEFINITIONS.ProductList_postList, args);
  }

  ProductList_putList(args: ProductList_putListArgs): Promise<ProductList_putListResponse> {
    return this.callOperation<ProductList_putListResponse>(OPERATION_DEFINITIONS.ProductList_putList, args);
  }

  ProductList_putListWithMeta(args: ProductList_putListArgs): Promise<ApiResult<ProductList_putListResponse>> {
    return this.callOperationWithMeta<ProductList_putListResponse>(OPERATION_DEFINITIONS.ProductList_putList, args);
  }

  ProductLogisticsSettings_get(args: ProductLogisticsSettings_getArgs = {}): Promise<ProductLogisticsSettings_getResponse> {
    return this.callOperation<ProductLogisticsSettings_getResponse>(OPERATION_DEFINITIONS.ProductLogisticsSettings_get, args);
  }

  ProductLogisticsSettings_getWithMeta(args: ProductLogisticsSettings_getArgs = {}): Promise<ApiResult<ProductLogisticsSettings_getResponse>> {
    return this.callOperationWithMeta<ProductLogisticsSettings_getResponse>(OPERATION_DEFINITIONS.ProductLogisticsSettings_get, args);
  }

  ProductLogisticsSettings_put(args: ProductLogisticsSettings_putArgs): Promise<ProductLogisticsSettings_putResponse> {
    return this.callOperation<ProductLogisticsSettings_putResponse>(OPERATION_DEFINITIONS.ProductLogisticsSettings_put, args);
  }

  ProductLogisticsSettings_putWithMeta(args: ProductLogisticsSettings_putArgs): Promise<ApiResult<ProductLogisticsSettings_putResponse>> {
    return this.callOperationWithMeta<ProductLogisticsSettings_putResponse>(OPERATION_DEFINITIONS.ProductLogisticsSettings_put, args);
  }

  ProductProductPrice_search(args: ProductProductPrice_searchArgs = {}): Promise<ProductProductPrice_searchResponse> {
    return this.callOperation<ProductProductPrice_searchResponse>(OPERATION_DEFINITIONS.ProductProductPrice_search, args);
  }

  ProductProductPrice_searchWithMeta(args: ProductProductPrice_searchArgs = {}): Promise<ApiResult<ProductProductPrice_searchResponse>> {
    return this.callOperationWithMeta<ProductProductPrice_searchResponse>(OPERATION_DEFINITIONS.ProductProductPrice_search, args);
  }

  ProductSupplierProduct_delete(args: ProductSupplierProduct_deleteArgs): Promise<ProductSupplierProduct_deleteResponse> {
    return this.callOperation<ProductSupplierProduct_deleteResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_delete, args);
  }

  ProductSupplierProduct_deleteWithMeta(args: ProductSupplierProduct_deleteArgs): Promise<ApiResult<ProductSupplierProduct_deleteResponse>> {
    return this.callOperationWithMeta<ProductSupplierProduct_deleteResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_delete, args);
  }

  ProductSupplierProduct_get(args: ProductSupplierProduct_getArgs): Promise<ProductSupplierProduct_getResponse> {
    return this.callOperation<ProductSupplierProduct_getResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_get, args);
  }

  ProductSupplierProduct_getWithMeta(args: ProductSupplierProduct_getArgs): Promise<ApiResult<ProductSupplierProduct_getResponse>> {
    return this.callOperationWithMeta<ProductSupplierProduct_getResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_get, args);
  }

  ProductSupplierProduct_post(args: ProductSupplierProduct_postArgs): Promise<ProductSupplierProduct_postResponse> {
    return this.callOperation<ProductSupplierProduct_postResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_post, args);
  }

  ProductSupplierProduct_postWithMeta(args: ProductSupplierProduct_postArgs): Promise<ApiResult<ProductSupplierProduct_postResponse>> {
    return this.callOperationWithMeta<ProductSupplierProduct_postResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_post, args);
  }

  ProductSupplierProduct_put(args: ProductSupplierProduct_putArgs): Promise<ProductSupplierProduct_putResponse> {
    return this.callOperation<ProductSupplierProduct_putResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_put, args);
  }

  ProductSupplierProduct_putWithMeta(args: ProductSupplierProduct_putArgs): Promise<ApiResult<ProductSupplierProduct_putResponse>> {
    return this.callOperationWithMeta<ProductSupplierProduct_putResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_put, args);
  }

  ProductSupplierProduct_search(args: ProductSupplierProduct_searchArgs = {}): Promise<ProductSupplierProduct_searchResponse> {
    return this.callOperation<ProductSupplierProduct_searchResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_search, args);
  }

  ProductSupplierProduct_searchWithMeta(args: ProductSupplierProduct_searchArgs = {}): Promise<ApiResult<ProductSupplierProduct_searchResponse>> {
    return this.callOperationWithMeta<ProductSupplierProduct_searchResponse>(OPERATION_DEFINITIONS.ProductSupplierProduct_search, args);
  }

  ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds(args: ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsArgs): Promise<ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsResponse> {
    return this.callOperation<ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsResponse>(OPERATION_DEFINITIONS.ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds, args);
  }

  ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsWithMeta(args: ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsArgs): Promise<ApiResult<ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsResponse>> {
    return this.callOperationWithMeta<ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsResponse>(OPERATION_DEFINITIONS.ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds, args);
  }

  ProductSupplierProductList_postList(args: ProductSupplierProductList_postListArgs): Promise<ProductSupplierProductList_postListResponse> {
    return this.callOperation<ProductSupplierProductList_postListResponse>(OPERATION_DEFINITIONS.ProductSupplierProductList_postList, args);
  }

  ProductSupplierProductList_postListWithMeta(args: ProductSupplierProductList_postListArgs): Promise<ApiResult<ProductSupplierProductList_postListResponse>> {
    return this.callOperationWithMeta<ProductSupplierProductList_postListResponse>(OPERATION_DEFINITIONS.ProductSupplierProductList_postList, args);
  }

  ProductSupplierProductList_putList(args: ProductSupplierProductList_putListArgs): Promise<ProductSupplierProductList_putListResponse> {
    return this.callOperation<ProductSupplierProductList_putListResponse>(OPERATION_DEFINITIONS.ProductSupplierProductList_putList, args);
  }

  ProductSupplierProductList_putListWithMeta(args: ProductSupplierProductList_putListArgs): Promise<ApiResult<ProductSupplierProductList_putListResponse>> {
    return this.callOperationWithMeta<ProductSupplierProductList_putListResponse>(OPERATION_DEFINITIONS.ProductSupplierProductList_putList, args);
  }

  ProductUnit_delete(args: ProductUnit_deleteArgs): Promise<ProductUnit_deleteResponse> {
    return this.callOperation<ProductUnit_deleteResponse>(OPERATION_DEFINITIONS.ProductUnit_delete, args);
  }

  ProductUnit_deleteWithMeta(args: ProductUnit_deleteArgs): Promise<ApiResult<ProductUnit_deleteResponse>> {
    return this.callOperationWithMeta<ProductUnit_deleteResponse>(OPERATION_DEFINITIONS.ProductUnit_delete, args);
  }

  ProductUnit_get(args: ProductUnit_getArgs): Promise<ProductUnit_getResponse> {
    return this.callOperation<ProductUnit_getResponse>(OPERATION_DEFINITIONS.ProductUnit_get, args);
  }

  ProductUnit_getWithMeta(args: ProductUnit_getArgs): Promise<ApiResult<ProductUnit_getResponse>> {
    return this.callOperationWithMeta<ProductUnit_getResponse>(OPERATION_DEFINITIONS.ProductUnit_get, args);
  }

  ProductUnit_post(args: ProductUnit_postArgs): Promise<ProductUnit_postResponse> {
    return this.callOperation<ProductUnit_postResponse>(OPERATION_DEFINITIONS.ProductUnit_post, args);
  }

  ProductUnit_postWithMeta(args: ProductUnit_postArgs): Promise<ApiResult<ProductUnit_postResponse>> {
    return this.callOperationWithMeta<ProductUnit_postResponse>(OPERATION_DEFINITIONS.ProductUnit_post, args);
  }

  ProductUnit_put(args: ProductUnit_putArgs): Promise<ProductUnit_putResponse> {
    return this.callOperation<ProductUnit_putResponse>(OPERATION_DEFINITIONS.ProductUnit_put, args);
  }

  ProductUnit_putWithMeta(args: ProductUnit_putArgs): Promise<ApiResult<ProductUnit_putResponse>> {
    return this.callOperationWithMeta<ProductUnit_putResponse>(OPERATION_DEFINITIONS.ProductUnit_put, args);
  }

  ProductUnit_search(args: ProductUnit_searchArgs = {}): Promise<ProductUnit_searchResponse> {
    return this.callOperation<ProductUnit_searchResponse>(OPERATION_DEFINITIONS.ProductUnit_search, args);
  }

  ProductUnit_searchWithMeta(args: ProductUnit_searchArgs = {}): Promise<ApiResult<ProductUnit_searchResponse>> {
    return this.callOperationWithMeta<ProductUnit_searchResponse>(OPERATION_DEFINITIONS.ProductUnit_search, args);
  }

  ProductUnitList_postList(args: ProductUnitList_postListArgs): Promise<ProductUnitList_postListResponse> {
    return this.callOperation<ProductUnitList_postListResponse>(OPERATION_DEFINITIONS.ProductUnitList_postList, args);
  }

  ProductUnitList_postListWithMeta(args: ProductUnitList_postListArgs): Promise<ApiResult<ProductUnitList_postListResponse>> {
    return this.callOperationWithMeta<ProductUnitList_postListResponse>(OPERATION_DEFINITIONS.ProductUnitList_postList, args);
  }

  ProductUnitList_putList(args: ProductUnitList_putListArgs): Promise<ProductUnitList_putListResponse> {
    return this.callOperation<ProductUnitList_putListResponse>(OPERATION_DEFINITIONS.ProductUnitList_putList, args);
  }

  ProductUnitList_putListWithMeta(args: ProductUnitList_putListArgs): Promise<ApiResult<ProductUnitList_putListResponse>> {
    return this.callOperationWithMeta<ProductUnitList_putListResponse>(OPERATION_DEFINITIONS.ProductUnitList_putList, args);
  }

  ProductUnitMaster_get(args: ProductUnitMaster_getArgs): Promise<ProductUnitMaster_getResponse> {
    return this.callOperation<ProductUnitMaster_getResponse>(OPERATION_DEFINITIONS.ProductUnitMaster_get, args);
  }

  ProductUnitMaster_getWithMeta(args: ProductUnitMaster_getArgs): Promise<ApiResult<ProductUnitMaster_getResponse>> {
    return this.callOperationWithMeta<ProductUnitMaster_getResponse>(OPERATION_DEFINITIONS.ProductUnitMaster_get, args);
  }

  ProductUnitMaster_search(args: ProductUnitMaster_searchArgs = {}): Promise<ProductUnitMaster_searchResponse> {
    return this.callOperation<ProductUnitMaster_searchResponse>(OPERATION_DEFINITIONS.ProductUnitMaster_search, args);
  }

  ProductUnitMaster_searchWithMeta(args: ProductUnitMaster_searchArgs = {}): Promise<ApiResult<ProductUnitMaster_searchResponse>> {
    return this.callOperationWithMeta<ProductUnitMaster_searchResponse>(OPERATION_DEFINITIONS.ProductUnitMaster_search, args);
  }

  ProductUnitQuery_query(args: ProductUnitQuery_queryArgs = {}): Promise<ProductUnitQuery_queryResponse> {
    return this.callOperation<ProductUnitQuery_queryResponse>(OPERATION_DEFINITIONS.ProductUnitQuery_query, args);
  }

  ProductUnitQuery_queryWithMeta(args: ProductUnitQuery_queryArgs = {}): Promise<ApiResult<ProductUnitQuery_queryResponse>> {
    return this.callOperationWithMeta<ProductUnitQuery_queryResponse>(OPERATION_DEFINITIONS.ProductUnitQuery_query, args);
  }

}

export class ProjectResource extends BaseClient {
  Project_delete(args: Project_deleteArgs): Promise<Project_deleteResponse> {
    return this.callOperation<Project_deleteResponse>(OPERATION_DEFINITIONS.Project_delete, args);
  }

  Project_deleteWithMeta(args: Project_deleteArgs): Promise<ApiResult<Project_deleteResponse>> {
    return this.callOperationWithMeta<Project_deleteResponse>(OPERATION_DEFINITIONS.Project_delete, args);
  }

  Project_deleteList(args: Project_deleteListArgs): Promise<Project_deleteListResponse> {
    return this.callOperation<Project_deleteListResponse>(OPERATION_DEFINITIONS.Project_deleteList, args);
  }

  Project_deleteListWithMeta(args: Project_deleteListArgs): Promise<ApiResult<Project_deleteListResponse>> {
    return this.callOperationWithMeta<Project_deleteListResponse>(OPERATION_DEFINITIONS.Project_deleteList, args);
  }

  Project_get(args: Project_getArgs): Promise<Project_getResponse> {
    return this.callOperation<Project_getResponse>(OPERATION_DEFINITIONS.Project_get, args);
  }

  Project_getWithMeta(args: Project_getArgs): Promise<ApiResult<Project_getResponse>> {
    return this.callOperationWithMeta<Project_getResponse>(OPERATION_DEFINITIONS.Project_get, args);
  }

  Project_post(args: Project_postArgs): Promise<Project_postResponse> {
    return this.callOperation<Project_postResponse>(OPERATION_DEFINITIONS.Project_post, args);
  }

  Project_postWithMeta(args: Project_postArgs): Promise<ApiResult<Project_postResponse>> {
    return this.callOperationWithMeta<Project_postResponse>(OPERATION_DEFINITIONS.Project_post, args);
  }

  Project_put(args: Project_putArgs): Promise<Project_putResponse> {
    return this.callOperation<Project_putResponse>(OPERATION_DEFINITIONS.Project_put, args);
  }

  Project_putWithMeta(args: Project_putArgs): Promise<ApiResult<Project_putResponse>> {
    return this.callOperationWithMeta<Project_putResponse>(OPERATION_DEFINITIONS.Project_put, args);
  }

  Project_search(args: Project_searchArgs = {}): Promise<Project_searchResponse> {
    return this.callOperation<Project_searchResponse>(OPERATION_DEFINITIONS.Project_search, args);
  }

  Project_searchWithMeta(args: Project_searchArgs = {}): Promise<ApiResult<Project_searchResponse>> {
    return this.callOperationWithMeta<Project_searchResponse>(OPERATION_DEFINITIONS.Project_search, args);
  }

  ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds(args: ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsArgs = {}): Promise<ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsResponse> {
    return this.callOperation<ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsResponse>(OPERATION_DEFINITIONS.ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds, args);
  }

  ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsWithMeta(args: ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsArgs = {}): Promise<ApiResult<ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsResponse>> {
    return this.callOperationWithMeta<ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsResponse>(OPERATION_DEFINITIONS.ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds, args);
  }

  ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds(args: ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsArgs = {}): Promise<ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsResponse> {
    return this.callOperation<ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsResponse>(OPERATION_DEFINITIONS.ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds, args);
  }

  ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsWithMeta(args: ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsArgs = {}): Promise<ApiResult<ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsResponse>> {
    return this.callOperationWithMeta<ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsResponse>(OPERATION_DEFINITIONS.ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds, args);
  }

  ProjectCategory_get(args: ProjectCategory_getArgs): Promise<ProjectCategory_getResponse> {
    return this.callOperation<ProjectCategory_getResponse>(OPERATION_DEFINITIONS.ProjectCategory_get, args);
  }

  ProjectCategory_getWithMeta(args: ProjectCategory_getArgs): Promise<ApiResult<ProjectCategory_getResponse>> {
    return this.callOperationWithMeta<ProjectCategory_getResponse>(OPERATION_DEFINITIONS.ProjectCategory_get, args);
  }

  ProjectCategory_post(args: ProjectCategory_postArgs): Promise<ProjectCategory_postResponse> {
    return this.callOperation<ProjectCategory_postResponse>(OPERATION_DEFINITIONS.ProjectCategory_post, args);
  }

  ProjectCategory_postWithMeta(args: ProjectCategory_postArgs): Promise<ApiResult<ProjectCategory_postResponse>> {
    return this.callOperationWithMeta<ProjectCategory_postResponse>(OPERATION_DEFINITIONS.ProjectCategory_post, args);
  }

  ProjectCategory_put(args: ProjectCategory_putArgs): Promise<ProjectCategory_putResponse> {
    return this.callOperation<ProjectCategory_putResponse>(OPERATION_DEFINITIONS.ProjectCategory_put, args);
  }

  ProjectCategory_putWithMeta(args: ProjectCategory_putArgs): Promise<ApiResult<ProjectCategory_putResponse>> {
    return this.callOperationWithMeta<ProjectCategory_putResponse>(OPERATION_DEFINITIONS.ProjectCategory_put, args);
  }

  ProjectCategory_search(args: ProjectCategory_searchArgs = {}): Promise<ProjectCategory_searchResponse> {
    return this.callOperation<ProjectCategory_searchResponse>(OPERATION_DEFINITIONS.ProjectCategory_search, args);
  }

  ProjectCategory_searchWithMeta(args: ProjectCategory_searchArgs = {}): Promise<ApiResult<ProjectCategory_searchResponse>> {
    return this.callOperationWithMeta<ProjectCategory_searchResponse>(OPERATION_DEFINITIONS.ProjectCategory_search, args);
  }

  ProjectControlForm_get(args: ProjectControlForm_getArgs): Promise<ProjectControlForm_getResponse> {
    return this.callOperation<ProjectControlForm_getResponse>(OPERATION_DEFINITIONS.ProjectControlForm_get, args);
  }

  ProjectControlForm_getWithMeta(args: ProjectControlForm_getArgs): Promise<ApiResult<ProjectControlForm_getResponse>> {
    return this.callOperationWithMeta<ProjectControlForm_getResponse>(OPERATION_DEFINITIONS.ProjectControlForm_get, args);
  }

  ProjectControlForm_search(args: ProjectControlForm_searchArgs = {}): Promise<ProjectControlForm_searchResponse> {
    return this.callOperation<ProjectControlForm_searchResponse>(OPERATION_DEFINITIONS.ProjectControlForm_search, args);
  }

  ProjectControlForm_searchWithMeta(args: ProjectControlForm_searchArgs = {}): Promise<ApiResult<ProjectControlForm_searchResponse>> {
    return this.callOperationWithMeta<ProjectControlForm_searchResponse>(OPERATION_DEFINITIONS.ProjectControlForm_search, args);
  }

  ProjectControlFormType_get(args: ProjectControlFormType_getArgs): Promise<ProjectControlFormType_getResponse> {
    return this.callOperation<ProjectControlFormType_getResponse>(OPERATION_DEFINITIONS.ProjectControlFormType_get, args);
  }

  ProjectControlFormType_getWithMeta(args: ProjectControlFormType_getArgs): Promise<ApiResult<ProjectControlFormType_getResponse>> {
    return this.callOperationWithMeta<ProjectControlFormType_getResponse>(OPERATION_DEFINITIONS.ProjectControlFormType_get, args);
  }

  ProjectControlFormType_search(args: ProjectControlFormType_searchArgs = {}): Promise<ProjectControlFormType_searchResponse> {
    return this.callOperation<ProjectControlFormType_searchResponse>(OPERATION_DEFINITIONS.ProjectControlFormType_search, args);
  }

  ProjectControlFormType_searchWithMeta(args: ProjectControlFormType_searchArgs = {}): Promise<ApiResult<ProjectControlFormType_searchResponse>> {
    return this.callOperationWithMeta<ProjectControlFormType_searchResponse>(OPERATION_DEFINITIONS.ProjectControlFormType_search, args);
  }

  ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm(args: ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormArgs): Promise<ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormResponse> {
    return this.callOperation<ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormResponse>(OPERATION_DEFINITIONS.ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm, args);
  }

  ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormWithMeta(args: ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormArgs): Promise<ApiResult<ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormResponse>> {
    return this.callOperationWithMeta<ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormResponse>(OPERATION_DEFINITIONS.ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm, args);
  }

  ProjectForTimeSheet_getForTimeSheet(args: ProjectForTimeSheet_getForTimeSheetArgs = {}): Promise<ProjectForTimeSheet_getForTimeSheetResponse> {
    return this.callOperation<ProjectForTimeSheet_getForTimeSheetResponse>(OPERATION_DEFINITIONS.ProjectForTimeSheet_getForTimeSheet, args);
  }

  ProjectForTimeSheet_getForTimeSheetWithMeta(args: ProjectForTimeSheet_getForTimeSheetArgs = {}): Promise<ApiResult<ProjectForTimeSheet_getForTimeSheetResponse>> {
    return this.callOperationWithMeta<ProjectForTimeSheet_getForTimeSheetResponse>(OPERATION_DEFINITIONS.ProjectForTimeSheet_getForTimeSheet, args);
  }

  ProjectHourlyRates_delete(args: ProjectHourlyRates_deleteArgs): Promise<ProjectHourlyRates_deleteResponse> {
    return this.callOperation<ProjectHourlyRates_deleteResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_delete, args);
  }

  ProjectHourlyRates_deleteWithMeta(args: ProjectHourlyRates_deleteArgs): Promise<ApiResult<ProjectHourlyRates_deleteResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRates_deleteResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_delete, args);
  }

  ProjectHourlyRates_get(args: ProjectHourlyRates_getArgs): Promise<ProjectHourlyRates_getResponse> {
    return this.callOperation<ProjectHourlyRates_getResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_get, args);
  }

  ProjectHourlyRates_getWithMeta(args: ProjectHourlyRates_getArgs): Promise<ApiResult<ProjectHourlyRates_getResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRates_getResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_get, args);
  }

  ProjectHourlyRates_post(args: ProjectHourlyRates_postArgs): Promise<ProjectHourlyRates_postResponse> {
    return this.callOperation<ProjectHourlyRates_postResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_post, args);
  }

  ProjectHourlyRates_postWithMeta(args: ProjectHourlyRates_postArgs): Promise<ApiResult<ProjectHourlyRates_postResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRates_postResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_post, args);
  }

  ProjectHourlyRates_put(args: ProjectHourlyRates_putArgs): Promise<ProjectHourlyRates_putResponse> {
    return this.callOperation<ProjectHourlyRates_putResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_put, args);
  }

  ProjectHourlyRates_putWithMeta(args: ProjectHourlyRates_putArgs): Promise<ApiResult<ProjectHourlyRates_putResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRates_putResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_put, args);
  }

  ProjectHourlyRates_search(args: ProjectHourlyRates_searchArgs = {}): Promise<ProjectHourlyRates_searchResponse> {
    return this.callOperation<ProjectHourlyRates_searchResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_search, args);
  }

  ProjectHourlyRates_searchWithMeta(args: ProjectHourlyRates_searchArgs = {}): Promise<ApiResult<ProjectHourlyRates_searchResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRates_searchResponse>(OPERATION_DEFINITIONS.ProjectHourlyRates_search, args);
  }

  ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds(args: ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsArgs = {}): Promise<ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsResponse> {
    return this.callOperation<ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds, args);
  }

  ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsWithMeta(args: ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsArgs = {}): Promise<ApiResult<ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds, args);
  }

  ProjectHourlyRatesList_deleteByIds(args: ProjectHourlyRatesList_deleteByIdsArgs = {}): Promise<ProjectHourlyRatesList_deleteByIdsResponse> {
    return this.callOperation<ProjectHourlyRatesList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_deleteByIds, args);
  }

  ProjectHourlyRatesList_deleteByIdsWithMeta(args: ProjectHourlyRatesList_deleteByIdsArgs = {}): Promise<ApiResult<ProjectHourlyRatesList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_deleteByIds, args);
  }

  ProjectHourlyRatesList_postList(args: ProjectHourlyRatesList_postListArgs): Promise<ProjectHourlyRatesList_postListResponse> {
    return this.callOperation<ProjectHourlyRatesList_postListResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_postList, args);
  }

  ProjectHourlyRatesList_postListWithMeta(args: ProjectHourlyRatesList_postListArgs): Promise<ApiResult<ProjectHourlyRatesList_postListResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesList_postListResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_postList, args);
  }

  ProjectHourlyRatesList_putList(args: ProjectHourlyRatesList_putListArgs): Promise<ProjectHourlyRatesList_putListResponse> {
    return this.callOperation<ProjectHourlyRatesList_putListResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_putList, args);
  }

  ProjectHourlyRatesList_putListWithMeta(args: ProjectHourlyRatesList_putListArgs): Promise<ApiResult<ProjectHourlyRatesList_putListResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesList_putListResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_putList, args);
  }

  ProjectHourlyRatesProjectSpecificRates_delete(args: ProjectHourlyRatesProjectSpecificRates_deleteArgs): Promise<ProjectHourlyRatesProjectSpecificRates_deleteResponse> {
    return this.callOperation<ProjectHourlyRatesProjectSpecificRates_deleteResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_delete, args);
  }

  ProjectHourlyRatesProjectSpecificRates_deleteWithMeta(args: ProjectHourlyRatesProjectSpecificRates_deleteArgs): Promise<ApiResult<ProjectHourlyRatesProjectSpecificRates_deleteResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesProjectSpecificRates_deleteResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_delete, args);
  }

  ProjectHourlyRatesProjectSpecificRates_get(args: ProjectHourlyRatesProjectSpecificRates_getArgs): Promise<ProjectHourlyRatesProjectSpecificRates_getResponse> {
    return this.callOperation<ProjectHourlyRatesProjectSpecificRates_getResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_get, args);
  }

  ProjectHourlyRatesProjectSpecificRates_getWithMeta(args: ProjectHourlyRatesProjectSpecificRates_getArgs): Promise<ApiResult<ProjectHourlyRatesProjectSpecificRates_getResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesProjectSpecificRates_getResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_get, args);
  }

  ProjectHourlyRatesProjectSpecificRates_post(args: ProjectHourlyRatesProjectSpecificRates_postArgs): Promise<ProjectHourlyRatesProjectSpecificRates_postResponse> {
    return this.callOperation<ProjectHourlyRatesProjectSpecificRates_postResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_post, args);
  }

  ProjectHourlyRatesProjectSpecificRates_postWithMeta(args: ProjectHourlyRatesProjectSpecificRates_postArgs): Promise<ApiResult<ProjectHourlyRatesProjectSpecificRates_postResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesProjectSpecificRates_postResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_post, args);
  }

  ProjectHourlyRatesProjectSpecificRates_put(args: ProjectHourlyRatesProjectSpecificRates_putArgs): Promise<ProjectHourlyRatesProjectSpecificRates_putResponse> {
    return this.callOperation<ProjectHourlyRatesProjectSpecificRates_putResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_put, args);
  }

  ProjectHourlyRatesProjectSpecificRates_putWithMeta(args: ProjectHourlyRatesProjectSpecificRates_putArgs): Promise<ApiResult<ProjectHourlyRatesProjectSpecificRates_putResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesProjectSpecificRates_putResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_put, args);
  }

  ProjectHourlyRatesProjectSpecificRates_search(args: ProjectHourlyRatesProjectSpecificRates_searchArgs = {}): Promise<ProjectHourlyRatesProjectSpecificRates_searchResponse> {
    return this.callOperation<ProjectHourlyRatesProjectSpecificRates_searchResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_search, args);
  }

  ProjectHourlyRatesProjectSpecificRates_searchWithMeta(args: ProjectHourlyRatesProjectSpecificRates_searchArgs = {}): Promise<ApiResult<ProjectHourlyRatesProjectSpecificRates_searchResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesProjectSpecificRates_searchResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_search, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_deleteByIds(args: ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsArgs = {}): Promise<ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsResponse> {
    return this.callOperation<ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_deleteByIds, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsWithMeta(args: ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsArgs = {}): Promise<ApiResult<ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_deleteByIds, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_postList(args: ProjectHourlyRatesProjectSpecificRatesList_postListArgs): Promise<ProjectHourlyRatesProjectSpecificRatesList_postListResponse> {
    return this.callOperation<ProjectHourlyRatesProjectSpecificRatesList_postListResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_postList, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_postListWithMeta(args: ProjectHourlyRatesProjectSpecificRatesList_postListArgs): Promise<ApiResult<ProjectHourlyRatesProjectSpecificRatesList_postListResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesProjectSpecificRatesList_postListResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_postList, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_putList(args: ProjectHourlyRatesProjectSpecificRatesList_putListArgs): Promise<ProjectHourlyRatesProjectSpecificRatesList_putListResponse> {
    return this.callOperation<ProjectHourlyRatesProjectSpecificRatesList_putListResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_putList, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_putListWithMeta(args: ProjectHourlyRatesProjectSpecificRatesList_putListArgs): Promise<ApiResult<ProjectHourlyRatesProjectSpecificRatesList_putListResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesProjectSpecificRatesList_putListResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_putList, args);
  }

  ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates(args: ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesArgs): Promise<ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesResponse> {
    return this.callOperation<ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates, args);
  }

  ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesWithMeta(args: ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesArgs): Promise<ApiResult<ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesResponse>> {
    return this.callOperationWithMeta<ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesResponse>(OPERATION_DEFINITIONS.ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates, args);
  }

  ProjectImport_importProjectStatement(args: ProjectImport_importProjectStatementArgs = {}): Promise<ProjectImport_importProjectStatementResponse> {
    return this.callOperation<ProjectImport_importProjectStatementResponse>(OPERATION_DEFINITIONS.ProjectImport_importProjectStatement, args);
  }

  ProjectImport_importProjectStatementWithMeta(args: ProjectImport_importProjectStatementArgs = {}): Promise<ApiResult<ProjectImport_importProjectStatementResponse>> {
    return this.callOperationWithMeta<ProjectImport_importProjectStatementResponse>(OPERATION_DEFINITIONS.ProjectImport_importProjectStatement, args);
  }

  ProjectList_deleteByIds(args: ProjectList_deleteByIdsArgs = {}): Promise<ProjectList_deleteByIdsResponse> {
    return this.callOperation<ProjectList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectList_deleteByIds, args);
  }

  ProjectList_deleteByIdsWithMeta(args: ProjectList_deleteByIdsArgs = {}): Promise<ApiResult<ProjectList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<ProjectList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectList_deleteByIds, args);
  }

  ProjectList_postList(args: ProjectList_postListArgs): Promise<ProjectList_postListResponse> {
    return this.callOperation<ProjectList_postListResponse>(OPERATION_DEFINITIONS.ProjectList_postList, args);
  }

  ProjectList_postListWithMeta(args: ProjectList_postListArgs): Promise<ApiResult<ProjectList_postListResponse>> {
    return this.callOperationWithMeta<ProjectList_postListResponse>(OPERATION_DEFINITIONS.ProjectList_postList, args);
  }

  ProjectList_putList(args: ProjectList_putListArgs): Promise<ProjectList_putListResponse> {
    return this.callOperation<ProjectList_putListResponse>(OPERATION_DEFINITIONS.ProjectList_putList, args);
  }

  ProjectList_putListWithMeta(args: ProjectList_putListArgs): Promise<ApiResult<ProjectList_putListResponse>> {
    return this.callOperationWithMeta<ProjectList_putListResponse>(OPERATION_DEFINITIONS.ProjectList_putList, args);
  }

  ProjectNumber_getByNumber(args: ProjectNumber_getByNumberArgs): Promise<ProjectNumber_getByNumberResponse> {
    return this.callOperation<ProjectNumber_getByNumberResponse>(OPERATION_DEFINITIONS.ProjectNumber_getByNumber, args);
  }

  ProjectNumber_getByNumberWithMeta(args: ProjectNumber_getByNumberArgs): Promise<ApiResult<ProjectNumber_getByNumberResponse>> {
    return this.callOperationWithMeta<ProjectNumber_getByNumberResponse>(OPERATION_DEFINITIONS.ProjectNumber_getByNumber, args);
  }

  ProjectOrderline_delete(args: ProjectOrderline_deleteArgs): Promise<ProjectOrderline_deleteResponse> {
    return this.callOperation<ProjectOrderline_deleteResponse>(OPERATION_DEFINITIONS.ProjectOrderline_delete, args);
  }

  ProjectOrderline_deleteWithMeta(args: ProjectOrderline_deleteArgs): Promise<ApiResult<ProjectOrderline_deleteResponse>> {
    return this.callOperationWithMeta<ProjectOrderline_deleteResponse>(OPERATION_DEFINITIONS.ProjectOrderline_delete, args);
  }

  ProjectOrderline_get(args: ProjectOrderline_getArgs): Promise<ProjectOrderline_getResponse> {
    return this.callOperation<ProjectOrderline_getResponse>(OPERATION_DEFINITIONS.ProjectOrderline_get, args);
  }

  ProjectOrderline_getWithMeta(args: ProjectOrderline_getArgs): Promise<ApiResult<ProjectOrderline_getResponse>> {
    return this.callOperationWithMeta<ProjectOrderline_getResponse>(OPERATION_DEFINITIONS.ProjectOrderline_get, args);
  }

  ProjectOrderline_post(args: ProjectOrderline_postArgs): Promise<ProjectOrderline_postResponse> {
    return this.callOperation<ProjectOrderline_postResponse>(OPERATION_DEFINITIONS.ProjectOrderline_post, args);
  }

  ProjectOrderline_postWithMeta(args: ProjectOrderline_postArgs): Promise<ApiResult<ProjectOrderline_postResponse>> {
    return this.callOperationWithMeta<ProjectOrderline_postResponse>(OPERATION_DEFINITIONS.ProjectOrderline_post, args);
  }

  ProjectOrderline_put(args: ProjectOrderline_putArgs): Promise<ProjectOrderline_putResponse> {
    return this.callOperation<ProjectOrderline_putResponse>(OPERATION_DEFINITIONS.ProjectOrderline_put, args);
  }

  ProjectOrderline_putWithMeta(args: ProjectOrderline_putArgs): Promise<ApiResult<ProjectOrderline_putResponse>> {
    return this.callOperationWithMeta<ProjectOrderline_putResponse>(OPERATION_DEFINITIONS.ProjectOrderline_put, args);
  }

  ProjectOrderline_search(args: ProjectOrderline_searchArgs = {}): Promise<ProjectOrderline_searchResponse> {
    return this.callOperation<ProjectOrderline_searchResponse>(OPERATION_DEFINITIONS.ProjectOrderline_search, args);
  }

  ProjectOrderline_searchWithMeta(args: ProjectOrderline_searchArgs = {}): Promise<ApiResult<ProjectOrderline_searchResponse>> {
    return this.callOperationWithMeta<ProjectOrderline_searchResponse>(OPERATION_DEFINITIONS.ProjectOrderline_search, args);
  }

  ProjectOrderlineList_postList(args: ProjectOrderlineList_postListArgs): Promise<ProjectOrderlineList_postListResponse> {
    return this.callOperation<ProjectOrderlineList_postListResponse>(OPERATION_DEFINITIONS.ProjectOrderlineList_postList, args);
  }

  ProjectOrderlineList_postListWithMeta(args: ProjectOrderlineList_postListArgs): Promise<ApiResult<ProjectOrderlineList_postListResponse>> {
    return this.callOperationWithMeta<ProjectOrderlineList_postListResponse>(OPERATION_DEFINITIONS.ProjectOrderlineList_postList, args);
  }

  ProjectOrderlineOrderLineTemplate_orderLineTemplate(args: ProjectOrderlineOrderLineTemplate_orderLineTemplateArgs = {}): Promise<ProjectOrderlineOrderLineTemplate_orderLineTemplateResponse> {
    return this.callOperation<ProjectOrderlineOrderLineTemplate_orderLineTemplateResponse>(OPERATION_DEFINITIONS.ProjectOrderlineOrderLineTemplate_orderLineTemplate, args);
  }

  ProjectOrderlineOrderLineTemplate_orderLineTemplateWithMeta(args: ProjectOrderlineOrderLineTemplate_orderLineTemplateArgs = {}): Promise<ApiResult<ProjectOrderlineOrderLineTemplate_orderLineTemplateResponse>> {
    return this.callOperationWithMeta<ProjectOrderlineOrderLineTemplate_orderLineTemplateResponse>(OPERATION_DEFINITIONS.ProjectOrderlineOrderLineTemplate_orderLineTemplate, args);
  }

  ProjectOrderlineQuery_query(args: ProjectOrderlineQuery_queryArgs = {}): Promise<ProjectOrderlineQuery_queryResponse> {
    return this.callOperation<ProjectOrderlineQuery_queryResponse>(OPERATION_DEFINITIONS.ProjectOrderlineQuery_query, args);
  }

  ProjectOrderlineQuery_queryWithMeta(args: ProjectOrderlineQuery_queryArgs = {}): Promise<ApiResult<ProjectOrderlineQuery_queryResponse>> {
    return this.callOperationWithMeta<ProjectOrderlineQuery_queryResponse>(OPERATION_DEFINITIONS.ProjectOrderlineQuery_query, args);
  }

  ProjectParticipant_get(args: ProjectParticipant_getArgs): Promise<ProjectParticipant_getResponse> {
    return this.callOperation<ProjectParticipant_getResponse>(OPERATION_DEFINITIONS.ProjectParticipant_get, args);
  }

  ProjectParticipant_getWithMeta(args: ProjectParticipant_getArgs): Promise<ApiResult<ProjectParticipant_getResponse>> {
    return this.callOperationWithMeta<ProjectParticipant_getResponse>(OPERATION_DEFINITIONS.ProjectParticipant_get, args);
  }

  ProjectParticipant_post(args: ProjectParticipant_postArgs): Promise<ProjectParticipant_postResponse> {
    return this.callOperation<ProjectParticipant_postResponse>(OPERATION_DEFINITIONS.ProjectParticipant_post, args);
  }

  ProjectParticipant_postWithMeta(args: ProjectParticipant_postArgs): Promise<ApiResult<ProjectParticipant_postResponse>> {
    return this.callOperationWithMeta<ProjectParticipant_postResponse>(OPERATION_DEFINITIONS.ProjectParticipant_post, args);
  }

  ProjectParticipant_put(args: ProjectParticipant_putArgs): Promise<ProjectParticipant_putResponse> {
    return this.callOperation<ProjectParticipant_putResponse>(OPERATION_DEFINITIONS.ProjectParticipant_put, args);
  }

  ProjectParticipant_putWithMeta(args: ProjectParticipant_putArgs): Promise<ApiResult<ProjectParticipant_putResponse>> {
    return this.callOperationWithMeta<ProjectParticipant_putResponse>(OPERATION_DEFINITIONS.ProjectParticipant_put, args);
  }

  ProjectParticipantList_deleteByIds(args: ProjectParticipantList_deleteByIdsArgs = {}): Promise<ProjectParticipantList_deleteByIdsResponse> {
    return this.callOperation<ProjectParticipantList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectParticipantList_deleteByIds, args);
  }

  ProjectParticipantList_deleteByIdsWithMeta(args: ProjectParticipantList_deleteByIdsArgs = {}): Promise<ApiResult<ProjectParticipantList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<ProjectParticipantList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectParticipantList_deleteByIds, args);
  }

  ProjectParticipantList_postList(args: ProjectParticipantList_postListArgs): Promise<ProjectParticipantList_postListResponse> {
    return this.callOperation<ProjectParticipantList_postListResponse>(OPERATION_DEFINITIONS.ProjectParticipantList_postList, args);
  }

  ProjectParticipantList_postListWithMeta(args: ProjectParticipantList_postListArgs): Promise<ApiResult<ProjectParticipantList_postListResponse>> {
    return this.callOperationWithMeta<ProjectParticipantList_postListResponse>(OPERATION_DEFINITIONS.ProjectParticipantList_postList, args);
  }

  ProjectPeriodBudgetStatus_getBudgetStatus(args: ProjectPeriodBudgetStatus_getBudgetStatusArgs): Promise<ProjectPeriodBudgetStatus_getBudgetStatusResponse> {
    return this.callOperation<ProjectPeriodBudgetStatus_getBudgetStatusResponse>(OPERATION_DEFINITIONS.ProjectPeriodBudgetStatus_getBudgetStatus, args);
  }

  ProjectPeriodBudgetStatus_getBudgetStatusWithMeta(args: ProjectPeriodBudgetStatus_getBudgetStatusArgs): Promise<ApiResult<ProjectPeriodBudgetStatus_getBudgetStatusResponse>> {
    return this.callOperationWithMeta<ProjectPeriodBudgetStatus_getBudgetStatusResponse>(OPERATION_DEFINITIONS.ProjectPeriodBudgetStatus_getBudgetStatus, args);
  }

  ProjectPeriodHourlistReport_hourlistReport(args: ProjectPeriodHourlistReport_hourlistReportArgs): Promise<ProjectPeriodHourlistReport_hourlistReportResponse> {
    return this.callOperation<ProjectPeriodHourlistReport_hourlistReportResponse>(OPERATION_DEFINITIONS.ProjectPeriodHourlistReport_hourlistReport, args);
  }

  ProjectPeriodHourlistReport_hourlistReportWithMeta(args: ProjectPeriodHourlistReport_hourlistReportArgs): Promise<ApiResult<ProjectPeriodHourlistReport_hourlistReportResponse>> {
    return this.callOperationWithMeta<ProjectPeriodHourlistReport_hourlistReportResponse>(OPERATION_DEFINITIONS.ProjectPeriodHourlistReport_hourlistReport, args);
  }

  ProjectPeriodInvoiced_invoiced(args: ProjectPeriodInvoiced_invoicedArgs): Promise<ProjectPeriodInvoiced_invoicedResponse> {
    return this.callOperation<ProjectPeriodInvoiced_invoicedResponse>(OPERATION_DEFINITIONS.ProjectPeriodInvoiced_invoiced, args);
  }

  ProjectPeriodInvoiced_invoicedWithMeta(args: ProjectPeriodInvoiced_invoicedArgs): Promise<ApiResult<ProjectPeriodInvoiced_invoicedResponse>> {
    return this.callOperationWithMeta<ProjectPeriodInvoiced_invoicedResponse>(OPERATION_DEFINITIONS.ProjectPeriodInvoiced_invoiced, args);
  }

  ProjectPeriodInvoicingReserve_invoicingReserve(args: ProjectPeriodInvoicingReserve_invoicingReserveArgs): Promise<ProjectPeriodInvoicingReserve_invoicingReserveResponse> {
    return this.callOperation<ProjectPeriodInvoicingReserve_invoicingReserveResponse>(OPERATION_DEFINITIONS.ProjectPeriodInvoicingReserve_invoicingReserve, args);
  }

  ProjectPeriodInvoicingReserve_invoicingReserveWithMeta(args: ProjectPeriodInvoicingReserve_invoicingReserveArgs): Promise<ApiResult<ProjectPeriodInvoicingReserve_invoicingReserveResponse>> {
    return this.callOperationWithMeta<ProjectPeriodInvoicingReserve_invoicingReserveResponse>(OPERATION_DEFINITIONS.ProjectPeriodInvoicingReserve_invoicingReserve, args);
  }

  ProjectPeriodMonthlyStatus_monthlyStatus(args: ProjectPeriodMonthlyStatus_monthlyStatusArgs): Promise<ProjectPeriodMonthlyStatus_monthlyStatusResponse> {
    return this.callOperation<ProjectPeriodMonthlyStatus_monthlyStatusResponse>(OPERATION_DEFINITIONS.ProjectPeriodMonthlyStatus_monthlyStatus, args);
  }

  ProjectPeriodMonthlyStatus_monthlyStatusWithMeta(args: ProjectPeriodMonthlyStatus_monthlyStatusArgs): Promise<ApiResult<ProjectPeriodMonthlyStatus_monthlyStatusResponse>> {
    return this.callOperationWithMeta<ProjectPeriodMonthlyStatus_monthlyStatusResponse>(OPERATION_DEFINITIONS.ProjectPeriodMonthlyStatus_monthlyStatus, args);
  }

  ProjectPeriodOverallStatus_overallStatus(args: ProjectPeriodOverallStatus_overallStatusArgs): Promise<ProjectPeriodOverallStatus_overallStatusResponse> {
    return this.callOperation<ProjectPeriodOverallStatus_overallStatusResponse>(OPERATION_DEFINITIONS.ProjectPeriodOverallStatus_overallStatus, args);
  }

  ProjectPeriodOverallStatus_overallStatusWithMeta(args: ProjectPeriodOverallStatus_overallStatusArgs): Promise<ApiResult<ProjectPeriodOverallStatus_overallStatusResponse>> {
    return this.callOperationWithMeta<ProjectPeriodOverallStatus_overallStatusResponse>(OPERATION_DEFINITIONS.ProjectPeriodOverallStatus_overallStatus, args);
  }

  ProjectProjectActivity_delete(args: ProjectProjectActivity_deleteArgs): Promise<ProjectProjectActivity_deleteResponse> {
    return this.callOperation<ProjectProjectActivity_deleteResponse>(OPERATION_DEFINITIONS.ProjectProjectActivity_delete, args);
  }

  ProjectProjectActivity_deleteWithMeta(args: ProjectProjectActivity_deleteArgs): Promise<ApiResult<ProjectProjectActivity_deleteResponse>> {
    return this.callOperationWithMeta<ProjectProjectActivity_deleteResponse>(OPERATION_DEFINITIONS.ProjectProjectActivity_delete, args);
  }

  ProjectProjectActivity_get(args: ProjectProjectActivity_getArgs): Promise<ProjectProjectActivity_getResponse> {
    return this.callOperation<ProjectProjectActivity_getResponse>(OPERATION_DEFINITIONS.ProjectProjectActivity_get, args);
  }

  ProjectProjectActivity_getWithMeta(args: ProjectProjectActivity_getArgs): Promise<ApiResult<ProjectProjectActivity_getResponse>> {
    return this.callOperationWithMeta<ProjectProjectActivity_getResponse>(OPERATION_DEFINITIONS.ProjectProjectActivity_get, args);
  }

  ProjectProjectActivity_post(args: ProjectProjectActivity_postArgs): Promise<ProjectProjectActivity_postResponse> {
    return this.callOperation<ProjectProjectActivity_postResponse>(OPERATION_DEFINITIONS.ProjectProjectActivity_post, args);
  }

  ProjectProjectActivity_postWithMeta(args: ProjectProjectActivity_postArgs): Promise<ApiResult<ProjectProjectActivity_postResponse>> {
    return this.callOperationWithMeta<ProjectProjectActivity_postResponse>(OPERATION_DEFINITIONS.ProjectProjectActivity_post, args);
  }

  ProjectProjectActivityList_deleteByIds(args: ProjectProjectActivityList_deleteByIdsArgs = {}): Promise<ProjectProjectActivityList_deleteByIdsResponse> {
    return this.callOperation<ProjectProjectActivityList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectProjectActivityList_deleteByIds, args);
  }

  ProjectProjectActivityList_deleteByIdsWithMeta(args: ProjectProjectActivityList_deleteByIdsArgs = {}): Promise<ApiResult<ProjectProjectActivityList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<ProjectProjectActivityList_deleteByIdsResponse>(OPERATION_DEFINITIONS.ProjectProjectActivityList_deleteByIds, args);
  }

  ProjectResourcePlanBudget_get(args: ProjectResourcePlanBudget_getArgs = {}): Promise<ProjectResourcePlanBudget_getResponse> {
    return this.callOperation<ProjectResourcePlanBudget_getResponse>(OPERATION_DEFINITIONS.ProjectResourcePlanBudget_get, args);
  }

  ProjectResourcePlanBudget_getWithMeta(args: ProjectResourcePlanBudget_getArgs = {}): Promise<ApiResult<ProjectResourcePlanBudget_getResponse>> {
    return this.callOperationWithMeta<ProjectResourcePlanBudget_getResponse>(OPERATION_DEFINITIONS.ProjectResourcePlanBudget_get, args);
  }

  ProjectSettings_get(args: ProjectSettings_getArgs = {}): Promise<ProjectSettings_getResponse> {
    return this.callOperation<ProjectSettings_getResponse>(OPERATION_DEFINITIONS.ProjectSettings_get, args);
  }

  ProjectSettings_getWithMeta(args: ProjectSettings_getArgs = {}): Promise<ApiResult<ProjectSettings_getResponse>> {
    return this.callOperationWithMeta<ProjectSettings_getResponse>(OPERATION_DEFINITIONS.ProjectSettings_get, args);
  }

  ProjectSettings_put(args: ProjectSettings_putArgs): Promise<ProjectSettings_putResponse> {
    return this.callOperation<ProjectSettings_putResponse>(OPERATION_DEFINITIONS.ProjectSettings_put, args);
  }

  ProjectSettings_putWithMeta(args: ProjectSettings_putArgs): Promise<ApiResult<ProjectSettings_putResponse>> {
    return this.callOperationWithMeta<ProjectSettings_putResponse>(OPERATION_DEFINITIONS.ProjectSettings_put, args);
  }

  ProjectSubcontract_delete(args: ProjectSubcontract_deleteArgs): Promise<ProjectSubcontract_deleteResponse> {
    return this.callOperation<ProjectSubcontract_deleteResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_delete, args);
  }

  ProjectSubcontract_deleteWithMeta(args: ProjectSubcontract_deleteArgs): Promise<ApiResult<ProjectSubcontract_deleteResponse>> {
    return this.callOperationWithMeta<ProjectSubcontract_deleteResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_delete, args);
  }

  ProjectSubcontract_get(args: ProjectSubcontract_getArgs): Promise<ProjectSubcontract_getResponse> {
    return this.callOperation<ProjectSubcontract_getResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_get, args);
  }

  ProjectSubcontract_getWithMeta(args: ProjectSubcontract_getArgs): Promise<ApiResult<ProjectSubcontract_getResponse>> {
    return this.callOperationWithMeta<ProjectSubcontract_getResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_get, args);
  }

  ProjectSubcontract_post(args: ProjectSubcontract_postArgs): Promise<ProjectSubcontract_postResponse> {
    return this.callOperation<ProjectSubcontract_postResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_post, args);
  }

  ProjectSubcontract_postWithMeta(args: ProjectSubcontract_postArgs): Promise<ApiResult<ProjectSubcontract_postResponse>> {
    return this.callOperationWithMeta<ProjectSubcontract_postResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_post, args);
  }

  ProjectSubcontract_put(args: ProjectSubcontract_putArgs): Promise<ProjectSubcontract_putResponse> {
    return this.callOperation<ProjectSubcontract_putResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_put, args);
  }

  ProjectSubcontract_putWithMeta(args: ProjectSubcontract_putArgs): Promise<ApiResult<ProjectSubcontract_putResponse>> {
    return this.callOperationWithMeta<ProjectSubcontract_putResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_put, args);
  }

  ProjectSubcontract_search(args: ProjectSubcontract_searchArgs = {}): Promise<ProjectSubcontract_searchResponse> {
    return this.callOperation<ProjectSubcontract_searchResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_search, args);
  }

  ProjectSubcontract_searchWithMeta(args: ProjectSubcontract_searchArgs = {}): Promise<ApiResult<ProjectSubcontract_searchResponse>> {
    return this.callOperationWithMeta<ProjectSubcontract_searchResponse>(OPERATION_DEFINITIONS.ProjectSubcontract_search, args);
  }

  ProjectSubcontractQuery_query(args: ProjectSubcontractQuery_queryArgs = {}): Promise<ProjectSubcontractQuery_queryResponse> {
    return this.callOperation<ProjectSubcontractQuery_queryResponse>(OPERATION_DEFINITIONS.ProjectSubcontractQuery_query, args);
  }

  ProjectSubcontractQuery_queryWithMeta(args: ProjectSubcontractQuery_queryArgs = {}): Promise<ApiResult<ProjectSubcontractQuery_queryResponse>> {
    return this.callOperationWithMeta<ProjectSubcontractQuery_queryResponse>(OPERATION_DEFINITIONS.ProjectSubcontractQuery_query, args);
  }

  ProjectTask_search(args: ProjectTask_searchArgs = {}): Promise<ProjectTask_searchResponse> {
    return this.callOperation<ProjectTask_searchResponse>(OPERATION_DEFINITIONS.ProjectTask_search, args);
  }

  ProjectTask_searchWithMeta(args: ProjectTask_searchArgs = {}): Promise<ApiResult<ProjectTask_searchResponse>> {
    return this.callOperationWithMeta<ProjectTask_searchResponse>(OPERATION_DEFINITIONS.ProjectTask_search, args);
  }

  ProjectTemplate_get(args: ProjectTemplate_getArgs): Promise<ProjectTemplate_getResponse> {
    return this.callOperation<ProjectTemplate_getResponse>(OPERATION_DEFINITIONS.ProjectTemplate_get, args);
  }

  ProjectTemplate_getWithMeta(args: ProjectTemplate_getArgs): Promise<ApiResult<ProjectTemplate_getResponse>> {
    return this.callOperationWithMeta<ProjectTemplate_getResponse>(OPERATION_DEFINITIONS.ProjectTemplate_get, args);
  }

}

export class PurchaseOrderResource extends BaseClient {
  PurchaseOrder_delete(args: PurchaseOrder_deleteArgs): Promise<PurchaseOrder_deleteResponse> {
    return this.callOperation<PurchaseOrder_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrder_delete, args);
  }

  PurchaseOrder_deleteWithMeta(args: PurchaseOrder_deleteArgs): Promise<ApiResult<PurchaseOrder_deleteResponse>> {
    return this.callOperationWithMeta<PurchaseOrder_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrder_delete, args);
  }

  PurchaseOrder_get(args: PurchaseOrder_getArgs): Promise<PurchaseOrder_getResponse> {
    return this.callOperation<PurchaseOrder_getResponse>(OPERATION_DEFINITIONS.PurchaseOrder_get, args);
  }

  PurchaseOrder_getWithMeta(args: PurchaseOrder_getArgs): Promise<ApiResult<PurchaseOrder_getResponse>> {
    return this.callOperationWithMeta<PurchaseOrder_getResponse>(OPERATION_DEFINITIONS.PurchaseOrder_get, args);
  }

  PurchaseOrder_post(args: PurchaseOrder_postArgs): Promise<PurchaseOrder_postResponse> {
    return this.callOperation<PurchaseOrder_postResponse>(OPERATION_DEFINITIONS.PurchaseOrder_post, args);
  }

  PurchaseOrder_postWithMeta(args: PurchaseOrder_postArgs): Promise<ApiResult<PurchaseOrder_postResponse>> {
    return this.callOperationWithMeta<PurchaseOrder_postResponse>(OPERATION_DEFINITIONS.PurchaseOrder_post, args);
  }

  PurchaseOrder_put(args: PurchaseOrder_putArgs): Promise<PurchaseOrder_putResponse> {
    return this.callOperation<PurchaseOrder_putResponse>(OPERATION_DEFINITIONS.PurchaseOrder_put, args);
  }

  PurchaseOrder_putWithMeta(args: PurchaseOrder_putArgs): Promise<ApiResult<PurchaseOrder_putResponse>> {
    return this.callOperationWithMeta<PurchaseOrder_putResponse>(OPERATION_DEFINITIONS.PurchaseOrder_put, args);
  }

  PurchaseOrder_search(args: PurchaseOrder_searchArgs = {}): Promise<PurchaseOrder_searchResponse> {
    return this.callOperation<PurchaseOrder_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrder_search, args);
  }

  PurchaseOrder_searchWithMeta(args: PurchaseOrder_searchArgs = {}): Promise<ApiResult<PurchaseOrder_searchResponse>> {
    return this.callOperationWithMeta<PurchaseOrder_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrder_search, args);
  }

  PurchaseOrderAttachment_deleteAttachment(args: PurchaseOrderAttachment_deleteAttachmentArgs): Promise<PurchaseOrderAttachment_deleteAttachmentResponse> {
    return this.callOperation<PurchaseOrderAttachment_deleteAttachmentResponse>(OPERATION_DEFINITIONS.PurchaseOrderAttachment_deleteAttachment, args);
  }

  PurchaseOrderAttachment_deleteAttachmentWithMeta(args: PurchaseOrderAttachment_deleteAttachmentArgs): Promise<ApiResult<PurchaseOrderAttachment_deleteAttachmentResponse>> {
    return this.callOperationWithMeta<PurchaseOrderAttachment_deleteAttachmentResponse>(OPERATION_DEFINITIONS.PurchaseOrderAttachment_deleteAttachment, args);
  }

  PurchaseOrderAttachment_uploadAttachment(args: PurchaseOrderAttachment_uploadAttachmentArgs): Promise<PurchaseOrderAttachment_uploadAttachmentResponse> {
    return this.callOperation<PurchaseOrderAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.PurchaseOrderAttachment_uploadAttachment, args);
  }

  PurchaseOrderAttachment_uploadAttachmentWithMeta(args: PurchaseOrderAttachment_uploadAttachmentArgs): Promise<ApiResult<PurchaseOrderAttachment_uploadAttachmentResponse>> {
    return this.callOperationWithMeta<PurchaseOrderAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.PurchaseOrderAttachment_uploadAttachment, args);
  }

  PurchaseOrderAttachmentList_uploadAttachments(args: PurchaseOrderAttachmentList_uploadAttachmentsArgs): Promise<PurchaseOrderAttachmentList_uploadAttachmentsResponse> {
    return this.callOperation<PurchaseOrderAttachmentList_uploadAttachmentsResponse>(OPERATION_DEFINITIONS.PurchaseOrderAttachmentList_uploadAttachments, args);
  }

  PurchaseOrderAttachmentList_uploadAttachmentsWithMeta(args: PurchaseOrderAttachmentList_uploadAttachmentsArgs): Promise<ApiResult<PurchaseOrderAttachmentList_uploadAttachmentsResponse>> {
    return this.callOperationWithMeta<PurchaseOrderAttachmentList_uploadAttachmentsResponse>(OPERATION_DEFINITIONS.PurchaseOrderAttachmentList_uploadAttachments, args);
  }

  PurchaseOrderDeviation_delete(args: PurchaseOrderDeviation_deleteArgs): Promise<PurchaseOrderDeviation_deleteResponse> {
    return this.callOperation<PurchaseOrderDeviation_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_delete, args);
  }

  PurchaseOrderDeviation_deleteWithMeta(args: PurchaseOrderDeviation_deleteArgs): Promise<ApiResult<PurchaseOrderDeviation_deleteResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviation_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_delete, args);
  }

  PurchaseOrderDeviation_get(args: PurchaseOrderDeviation_getArgs): Promise<PurchaseOrderDeviation_getResponse> {
    return this.callOperation<PurchaseOrderDeviation_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_get, args);
  }

  PurchaseOrderDeviation_getWithMeta(args: PurchaseOrderDeviation_getArgs): Promise<ApiResult<PurchaseOrderDeviation_getResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviation_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_get, args);
  }

  PurchaseOrderDeviation_post(args: PurchaseOrderDeviation_postArgs): Promise<PurchaseOrderDeviation_postResponse> {
    return this.callOperation<PurchaseOrderDeviation_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_post, args);
  }

  PurchaseOrderDeviation_postWithMeta(args: PurchaseOrderDeviation_postArgs): Promise<ApiResult<PurchaseOrderDeviation_postResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviation_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_post, args);
  }

  PurchaseOrderDeviation_put(args: PurchaseOrderDeviation_putArgs): Promise<PurchaseOrderDeviation_putResponse> {
    return this.callOperation<PurchaseOrderDeviation_putResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_put, args);
  }

  PurchaseOrderDeviation_putWithMeta(args: PurchaseOrderDeviation_putArgs): Promise<ApiResult<PurchaseOrderDeviation_putResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviation_putResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_put, args);
  }

  PurchaseOrderDeviation_search(args: PurchaseOrderDeviation_searchArgs = {}): Promise<PurchaseOrderDeviation_searchResponse> {
    return this.callOperation<PurchaseOrderDeviation_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_search, args);
  }

  PurchaseOrderDeviation_searchWithMeta(args: PurchaseOrderDeviation_searchArgs = {}): Promise<ApiResult<PurchaseOrderDeviation_searchResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviation_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_search, args);
  }

  PurchaseOrderDeviationApprove_approve(args: PurchaseOrderDeviationApprove_approveArgs): Promise<PurchaseOrderDeviationApprove_approveResponse> {
    return this.callOperation<PurchaseOrderDeviationApprove_approveResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationApprove_approve, args);
  }

  PurchaseOrderDeviationApprove_approveWithMeta(args: PurchaseOrderDeviationApprove_approveArgs): Promise<ApiResult<PurchaseOrderDeviationApprove_approveResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviationApprove_approveResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationApprove_approve, args);
  }

  PurchaseOrderDeviationDeliver_deliver(args: PurchaseOrderDeviationDeliver_deliverArgs): Promise<PurchaseOrderDeviationDeliver_deliverResponse> {
    return this.callOperation<PurchaseOrderDeviationDeliver_deliverResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationDeliver_deliver, args);
  }

  PurchaseOrderDeviationDeliver_deliverWithMeta(args: PurchaseOrderDeviationDeliver_deliverArgs): Promise<ApiResult<PurchaseOrderDeviationDeliver_deliverResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviationDeliver_deliverResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationDeliver_deliver, args);
  }

  PurchaseOrderDeviationList_postList(args: PurchaseOrderDeviationList_postListArgs): Promise<PurchaseOrderDeviationList_postListResponse> {
    return this.callOperation<PurchaseOrderDeviationList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationList_postList, args);
  }

  PurchaseOrderDeviationList_postListWithMeta(args: PurchaseOrderDeviationList_postListArgs): Promise<ApiResult<PurchaseOrderDeviationList_postListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviationList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationList_postList, args);
  }

  PurchaseOrderDeviationList_putList(args: PurchaseOrderDeviationList_putListArgs): Promise<PurchaseOrderDeviationList_putListResponse> {
    return this.callOperation<PurchaseOrderDeviationList_putListResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationList_putList, args);
  }

  PurchaseOrderDeviationList_putListWithMeta(args: PurchaseOrderDeviationList_putListArgs): Promise<ApiResult<PurchaseOrderDeviationList_putListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviationList_putListResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationList_putList, args);
  }

  PurchaseOrderDeviationUndeliver_undeliver(args: PurchaseOrderDeviationUndeliver_undeliverArgs): Promise<PurchaseOrderDeviationUndeliver_undeliverResponse> {
    return this.callOperation<PurchaseOrderDeviationUndeliver_undeliverResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationUndeliver_undeliver, args);
  }

  PurchaseOrderDeviationUndeliver_undeliverWithMeta(args: PurchaseOrderDeviationUndeliver_undeliverArgs): Promise<ApiResult<PurchaseOrderDeviationUndeliver_undeliverResponse>> {
    return this.callOperationWithMeta<PurchaseOrderDeviationUndeliver_undeliverResponse>(OPERATION_DEFINITIONS.PurchaseOrderDeviationUndeliver_undeliver, args);
  }

  PurchaseOrderGoodsReceipt_delete(args: PurchaseOrderGoodsReceipt_deleteArgs): Promise<PurchaseOrderGoodsReceipt_deleteResponse> {
    return this.callOperation<PurchaseOrderGoodsReceipt_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_delete, args);
  }

  PurchaseOrderGoodsReceipt_deleteWithMeta(args: PurchaseOrderGoodsReceipt_deleteArgs): Promise<ApiResult<PurchaseOrderGoodsReceipt_deleteResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceipt_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_delete, args);
  }

  PurchaseOrderGoodsReceipt_get(args: PurchaseOrderGoodsReceipt_getArgs): Promise<PurchaseOrderGoodsReceipt_getResponse> {
    return this.callOperation<PurchaseOrderGoodsReceipt_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_get, args);
  }

  PurchaseOrderGoodsReceipt_getWithMeta(args: PurchaseOrderGoodsReceipt_getArgs): Promise<ApiResult<PurchaseOrderGoodsReceipt_getResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceipt_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_get, args);
  }

  PurchaseOrderGoodsReceipt_post(args: PurchaseOrderGoodsReceipt_postArgs): Promise<PurchaseOrderGoodsReceipt_postResponse> {
    return this.callOperation<PurchaseOrderGoodsReceipt_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_post, args);
  }

  PurchaseOrderGoodsReceipt_postWithMeta(args: PurchaseOrderGoodsReceipt_postArgs): Promise<ApiResult<PurchaseOrderGoodsReceipt_postResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceipt_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_post, args);
  }

  PurchaseOrderGoodsReceipt_put(args: PurchaseOrderGoodsReceipt_putArgs): Promise<PurchaseOrderGoodsReceipt_putResponse> {
    return this.callOperation<PurchaseOrderGoodsReceipt_putResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_put, args);
  }

  PurchaseOrderGoodsReceipt_putWithMeta(args: PurchaseOrderGoodsReceipt_putArgs): Promise<ApiResult<PurchaseOrderGoodsReceipt_putResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceipt_putResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_put, args);
  }

  PurchaseOrderGoodsReceipt_search(args: PurchaseOrderGoodsReceipt_searchArgs = {}): Promise<PurchaseOrderGoodsReceipt_searchResponse> {
    return this.callOperation<PurchaseOrderGoodsReceipt_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_search, args);
  }

  PurchaseOrderGoodsReceipt_searchWithMeta(args: PurchaseOrderGoodsReceipt_searchArgs = {}): Promise<ApiResult<PurchaseOrderGoodsReceipt_searchResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceipt_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_search, args);
  }

  PurchaseOrderGoodsReceiptConfirm_confirm(args: PurchaseOrderGoodsReceiptConfirm_confirmArgs): Promise<PurchaseOrderGoodsReceiptConfirm_confirmResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptConfirm_confirmResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptConfirm_confirm, args);
  }

  PurchaseOrderGoodsReceiptConfirm_confirmWithMeta(args: PurchaseOrderGoodsReceiptConfirm_confirmArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptConfirm_confirmResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptConfirm_confirmResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptConfirm_confirm, args);
  }

  PurchaseOrderGoodsReceiptLine_delete(args: PurchaseOrderGoodsReceiptLine_deleteArgs): Promise<PurchaseOrderGoodsReceiptLine_deleteResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptLine_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_delete, args);
  }

  PurchaseOrderGoodsReceiptLine_deleteWithMeta(args: PurchaseOrderGoodsReceiptLine_deleteArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptLine_deleteResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptLine_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_delete, args);
  }

  PurchaseOrderGoodsReceiptLine_get(args: PurchaseOrderGoodsReceiptLine_getArgs): Promise<PurchaseOrderGoodsReceiptLine_getResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptLine_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_get, args);
  }

  PurchaseOrderGoodsReceiptLine_getWithMeta(args: PurchaseOrderGoodsReceiptLine_getArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptLine_getResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptLine_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_get, args);
  }

  PurchaseOrderGoodsReceiptLine_post(args: PurchaseOrderGoodsReceiptLine_postArgs): Promise<PurchaseOrderGoodsReceiptLine_postResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptLine_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_post, args);
  }

  PurchaseOrderGoodsReceiptLine_postWithMeta(args: PurchaseOrderGoodsReceiptLine_postArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptLine_postResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptLine_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_post, args);
  }

  PurchaseOrderGoodsReceiptLine_put(args: PurchaseOrderGoodsReceiptLine_putArgs): Promise<PurchaseOrderGoodsReceiptLine_putResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptLine_putResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_put, args);
  }

  PurchaseOrderGoodsReceiptLine_putWithMeta(args: PurchaseOrderGoodsReceiptLine_putArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptLine_putResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptLine_putResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_put, args);
  }

  PurchaseOrderGoodsReceiptLine_search(args: PurchaseOrderGoodsReceiptLine_searchArgs = {}): Promise<PurchaseOrderGoodsReceiptLine_searchResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptLine_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_search, args);
  }

  PurchaseOrderGoodsReceiptLine_searchWithMeta(args: PurchaseOrderGoodsReceiptLine_searchArgs = {}): Promise<ApiResult<PurchaseOrderGoodsReceiptLine_searchResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptLine_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_search, args);
  }

  PurchaseOrderGoodsReceiptLineList_deleteList(args: PurchaseOrderGoodsReceiptLineList_deleteListArgs): Promise<PurchaseOrderGoodsReceiptLineList_deleteListResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptLineList_deleteListResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_deleteList, args);
  }

  PurchaseOrderGoodsReceiptLineList_deleteListWithMeta(args: PurchaseOrderGoodsReceiptLineList_deleteListArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptLineList_deleteListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptLineList_deleteListResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_deleteList, args);
  }

  PurchaseOrderGoodsReceiptLineList_postList(args: PurchaseOrderGoodsReceiptLineList_postListArgs): Promise<PurchaseOrderGoodsReceiptLineList_postListResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptLineList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_postList, args);
  }

  PurchaseOrderGoodsReceiptLineList_postListWithMeta(args: PurchaseOrderGoodsReceiptLineList_postListArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptLineList_postListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptLineList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_postList, args);
  }

  PurchaseOrderGoodsReceiptLineList_putList(args: PurchaseOrderGoodsReceiptLineList_putListArgs): Promise<PurchaseOrderGoodsReceiptLineList_putListResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptLineList_putListResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_putList, args);
  }

  PurchaseOrderGoodsReceiptLineList_putListWithMeta(args: PurchaseOrderGoodsReceiptLineList_putListArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptLineList_putListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptLineList_putListResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_putList, args);
  }

  PurchaseOrderGoodsReceiptList_deleteByIds(args: PurchaseOrderGoodsReceiptList_deleteByIdsArgs = {}): Promise<PurchaseOrderGoodsReceiptList_deleteByIdsResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptList_deleteByIdsResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptList_deleteByIds, args);
  }

  PurchaseOrderGoodsReceiptList_deleteByIdsWithMeta(args: PurchaseOrderGoodsReceiptList_deleteByIdsArgs = {}): Promise<ApiResult<PurchaseOrderGoodsReceiptList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptList_deleteByIdsResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptList_deleteByIds, args);
  }

  PurchaseOrderGoodsReceiptList_postList(args: PurchaseOrderGoodsReceiptList_postListArgs): Promise<PurchaseOrderGoodsReceiptList_postListResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptList_postList, args);
  }

  PurchaseOrderGoodsReceiptList_postListWithMeta(args: PurchaseOrderGoodsReceiptList_postListArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptList_postListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptList_postList, args);
  }

  PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm(args: PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmArgs): Promise<PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm, args);
  }

  PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmWithMeta(args: PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm, args);
  }

  PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt(args: PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptArgs): Promise<PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptResponse> {
    return this.callOperation<PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt, args);
  }

  PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptWithMeta(args: PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptArgs): Promise<ApiResult<PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptResponse>> {
    return this.callOperationWithMeta<PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptResponse>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt, args);
  }

  PurchaseOrderOrderline_delete(args: PurchaseOrderOrderline_deleteArgs): Promise<PurchaseOrderOrderline_deleteResponse> {
    return this.callOperation<PurchaseOrderOrderline_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_delete, args);
  }

  PurchaseOrderOrderline_deleteWithMeta(args: PurchaseOrderOrderline_deleteArgs): Promise<ApiResult<PurchaseOrderOrderline_deleteResponse>> {
    return this.callOperationWithMeta<PurchaseOrderOrderline_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_delete, args);
  }

  PurchaseOrderOrderline_get(args: PurchaseOrderOrderline_getArgs): Promise<PurchaseOrderOrderline_getResponse> {
    return this.callOperation<PurchaseOrderOrderline_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_get, args);
  }

  PurchaseOrderOrderline_getWithMeta(args: PurchaseOrderOrderline_getArgs): Promise<ApiResult<PurchaseOrderOrderline_getResponse>> {
    return this.callOperationWithMeta<PurchaseOrderOrderline_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_get, args);
  }

  PurchaseOrderOrderline_post(args: PurchaseOrderOrderline_postArgs): Promise<PurchaseOrderOrderline_postResponse> {
    return this.callOperation<PurchaseOrderOrderline_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_post, args);
  }

  PurchaseOrderOrderline_postWithMeta(args: PurchaseOrderOrderline_postArgs): Promise<ApiResult<PurchaseOrderOrderline_postResponse>> {
    return this.callOperationWithMeta<PurchaseOrderOrderline_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_post, args);
  }

  PurchaseOrderOrderline_put(args: PurchaseOrderOrderline_putArgs): Promise<PurchaseOrderOrderline_putResponse> {
    return this.callOperation<PurchaseOrderOrderline_putResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_put, args);
  }

  PurchaseOrderOrderline_putWithMeta(args: PurchaseOrderOrderline_putArgs): Promise<ApiResult<PurchaseOrderOrderline_putResponse>> {
    return this.callOperationWithMeta<PurchaseOrderOrderline_putResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_put, args);
  }

  PurchaseOrderOrderlineList_deleteList(args: PurchaseOrderOrderlineList_deleteListArgs): Promise<PurchaseOrderOrderlineList_deleteListResponse> {
    return this.callOperation<PurchaseOrderOrderlineList_deleteListResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_deleteList, args);
  }

  PurchaseOrderOrderlineList_deleteListWithMeta(args: PurchaseOrderOrderlineList_deleteListArgs): Promise<ApiResult<PurchaseOrderOrderlineList_deleteListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderOrderlineList_deleteListResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_deleteList, args);
  }

  PurchaseOrderOrderlineList_postList(args: PurchaseOrderOrderlineList_postListArgs): Promise<PurchaseOrderOrderlineList_postListResponse> {
    return this.callOperation<PurchaseOrderOrderlineList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_postList, args);
  }

  PurchaseOrderOrderlineList_postListWithMeta(args: PurchaseOrderOrderlineList_postListArgs): Promise<ApiResult<PurchaseOrderOrderlineList_postListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderOrderlineList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_postList, args);
  }

  PurchaseOrderOrderlineList_putList(args: PurchaseOrderOrderlineList_putListArgs): Promise<PurchaseOrderOrderlineList_putListResponse> {
    return this.callOperation<PurchaseOrderOrderlineList_putListResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_putList, args);
  }

  PurchaseOrderOrderlineList_putListWithMeta(args: PurchaseOrderOrderlineList_putListArgs): Promise<ApiResult<PurchaseOrderOrderlineList_putListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderOrderlineList_putListResponse>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_putList, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteArgs): Promise<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteResponse> {
    return this.callOperation<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteWithMeta(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteArgs): Promise<ApiResult<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteResponse>> {
    return this.callOperationWithMeta<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getArgs): Promise<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getResponse> {
    return this.callOperation<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getWithMeta(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getArgs): Promise<ApiResult<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getResponse>> {
    return this.callOperationWithMeta<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postArgs): Promise<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postResponse> {
    return this.callOperation<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postWithMeta(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postArgs): Promise<ApiResult<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postResponse>> {
    return this.callOperationWithMeta<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchArgs = {}): Promise<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchResponse> {
    return this.callOperation<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchWithMeta(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchArgs = {}): Promise<ApiResult<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchResponse>> {
    return this.callOperationWithMeta<PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsArgs = {}): Promise<PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsResponse> {
    return this.callOperation<PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsWithMeta(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsArgs = {}): Promise<ApiResult<PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListArgs): Promise<PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListResponse> {
    return this.callOperation<PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListWithMeta(args: PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListArgs): Promise<ApiResult<PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListResponse>> {
    return this.callOperationWithMeta<PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListResponse>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList, args);
  }

  PurchaseOrderSend_send(args: PurchaseOrderSend_sendArgs): Promise<PurchaseOrderSend_sendResponse> {
    return this.callOperation<PurchaseOrderSend_sendResponse>(OPERATION_DEFINITIONS.PurchaseOrderSend_send, args);
  }

  PurchaseOrderSend_sendWithMeta(args: PurchaseOrderSend_sendArgs): Promise<ApiResult<PurchaseOrderSend_sendResponse>> {
    return this.callOperationWithMeta<PurchaseOrderSend_sendResponse>(OPERATION_DEFINITIONS.PurchaseOrderSend_send, args);
  }

  PurchaseOrderSendByEmail_sendByEmail(args: PurchaseOrderSendByEmail_sendByEmailArgs): Promise<PurchaseOrderSendByEmail_sendByEmailResponse> {
    return this.callOperation<PurchaseOrderSendByEmail_sendByEmailResponse>(OPERATION_DEFINITIONS.PurchaseOrderSendByEmail_sendByEmail, args);
  }

  PurchaseOrderSendByEmail_sendByEmailWithMeta(args: PurchaseOrderSendByEmail_sendByEmailArgs): Promise<ApiResult<PurchaseOrderSendByEmail_sendByEmailResponse>> {
    return this.callOperationWithMeta<PurchaseOrderSendByEmail_sendByEmailResponse>(OPERATION_DEFINITIONS.PurchaseOrderSendByEmail_sendByEmail, args);
  }

}

export class ReminderResource extends BaseClient {
  Reminder_get(args: Reminder_getArgs): Promise<Reminder_getResponse> {
    return this.callOperation<Reminder_getResponse>(OPERATION_DEFINITIONS.Reminder_get, args);
  }

  Reminder_getWithMeta(args: Reminder_getArgs): Promise<ApiResult<Reminder_getResponse>> {
    return this.callOperationWithMeta<Reminder_getResponse>(OPERATION_DEFINITIONS.Reminder_get, args);
  }

  Reminder_search(args: Reminder_searchArgs = {}): Promise<Reminder_searchResponse> {
    return this.callOperation<Reminder_searchResponse>(OPERATION_DEFINITIONS.Reminder_search, args);
  }

  Reminder_searchWithMeta(args: Reminder_searchArgs = {}): Promise<ApiResult<Reminder_searchResponse>> {
    return this.callOperationWithMeta<Reminder_searchResponse>(OPERATION_DEFINITIONS.Reminder_search, args);
  }

  ReminderPdf_downloadPdf(args: ReminderPdf_downloadPdfArgs): Promise<ReminderPdf_downloadPdfResponse> {
    return this.callOperation<ReminderPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.ReminderPdf_downloadPdf, args);
  }

  ReminderPdf_downloadPdfWithMeta(args: ReminderPdf_downloadPdfArgs): Promise<ApiResult<ReminderPdf_downloadPdfResponse>> {
    return this.callOperationWithMeta<ReminderPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.ReminderPdf_downloadPdf, args);
  }

}

export class ResultbudgetResource extends BaseClient {
  Resultbudget_search(args: Resultbudget_searchArgs = {}): Promise<Resultbudget_searchResponse> {
    return this.callOperation<Resultbudget_searchResponse>(OPERATION_DEFINITIONS.Resultbudget_search, args);
  }

  Resultbudget_searchWithMeta(args: Resultbudget_searchArgs = {}): Promise<ApiResult<Resultbudget_searchResponse>> {
    return this.callOperationWithMeta<Resultbudget_searchResponse>(OPERATION_DEFINITIONS.Resultbudget_search, args);
  }

  ResultbudgetCompany_getCompanyResultBudget(args: ResultbudgetCompany_getCompanyResultBudgetArgs = {}): Promise<ResultbudgetCompany_getCompanyResultBudgetResponse> {
    return this.callOperation<ResultbudgetCompany_getCompanyResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetCompany_getCompanyResultBudget, args);
  }

  ResultbudgetCompany_getCompanyResultBudgetWithMeta(args: ResultbudgetCompany_getCompanyResultBudgetArgs = {}): Promise<ApiResult<ResultbudgetCompany_getCompanyResultBudgetResponse>> {
    return this.callOperationWithMeta<ResultbudgetCompany_getCompanyResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetCompany_getCompanyResultBudget, args);
  }

  ResultbudgetDepartment_getDepartmentResultBudget(args: ResultbudgetDepartment_getDepartmentResultBudgetArgs): Promise<ResultbudgetDepartment_getDepartmentResultBudgetResponse> {
    return this.callOperation<ResultbudgetDepartment_getDepartmentResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetDepartment_getDepartmentResultBudget, args);
  }

  ResultbudgetDepartment_getDepartmentResultBudgetWithMeta(args: ResultbudgetDepartment_getDepartmentResultBudgetArgs): Promise<ApiResult<ResultbudgetDepartment_getDepartmentResultBudgetResponse>> {
    return this.callOperationWithMeta<ResultbudgetDepartment_getDepartmentResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetDepartment_getDepartmentResultBudget, args);
  }

  ResultbudgetEmployee_getEmployeeResultBudget(args: ResultbudgetEmployee_getEmployeeResultBudgetArgs): Promise<ResultbudgetEmployee_getEmployeeResultBudgetResponse> {
    return this.callOperation<ResultbudgetEmployee_getEmployeeResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetEmployee_getEmployeeResultBudget, args);
  }

  ResultbudgetEmployee_getEmployeeResultBudgetWithMeta(args: ResultbudgetEmployee_getEmployeeResultBudgetArgs): Promise<ApiResult<ResultbudgetEmployee_getEmployeeResultBudgetResponse>> {
    return this.callOperationWithMeta<ResultbudgetEmployee_getEmployeeResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetEmployee_getEmployeeResultBudget, args);
  }

  ResultbudgetProduct_getProductResultBudget(args: ResultbudgetProduct_getProductResultBudgetArgs): Promise<ResultbudgetProduct_getProductResultBudgetResponse> {
    return this.callOperation<ResultbudgetProduct_getProductResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetProduct_getProductResultBudget, args);
  }

  ResultbudgetProduct_getProductResultBudgetWithMeta(args: ResultbudgetProduct_getProductResultBudgetArgs): Promise<ApiResult<ResultbudgetProduct_getProductResultBudgetResponse>> {
    return this.callOperationWithMeta<ResultbudgetProduct_getProductResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetProduct_getProductResultBudget, args);
  }

  ResultbudgetProject_getProjectResultBudget(args: ResultbudgetProject_getProjectResultBudgetArgs): Promise<ResultbudgetProject_getProjectResultBudgetResponse> {
    return this.callOperation<ResultbudgetProject_getProjectResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetProject_getProjectResultBudget, args);
  }

  ResultbudgetProject_getProjectResultBudgetWithMeta(args: ResultbudgetProject_getProjectResultBudgetArgs): Promise<ApiResult<ResultbudgetProject_getProjectResultBudgetResponse>> {
    return this.callOperationWithMeta<ResultbudgetProject_getProjectResultBudgetResponse>(OPERATION_DEFINITIONS.ResultbudgetProject_getProjectResultBudget, args);
  }

}

export class SaftResource extends BaseClient {
  SaftExportSAFT_exportSAFT(args: SaftExportSAFT_exportSAFTArgs = {}): Promise<SaftExportSAFT_exportSAFTResponse> {
    return this.callOperation<SaftExportSAFT_exportSAFTResponse>(OPERATION_DEFINITIONS.SaftExportSAFT_exportSAFT, args);
  }

  SaftExportSAFT_exportSAFTWithMeta(args: SaftExportSAFT_exportSAFTArgs = {}): Promise<ApiResult<SaftExportSAFT_exportSAFTResponse>> {
    return this.callOperationWithMeta<SaftExportSAFT_exportSAFTResponse>(OPERATION_DEFINITIONS.SaftExportSAFT_exportSAFT, args);
  }

  SaftImportSAFT_importSAFT(args: SaftImportSAFT_importSAFTArgs = {}): Promise<SaftImportSAFT_importSAFTResponse> {
    return this.callOperation<SaftImportSAFT_importSAFTResponse>(OPERATION_DEFINITIONS.SaftImportSAFT_importSAFT, args);
  }

  SaftImportSAFT_importSAFTWithMeta(args: SaftImportSAFT_importSAFTArgs = {}): Promise<ApiResult<SaftImportSAFT_importSAFTResponse>> {
    return this.callOperationWithMeta<SaftImportSAFT_importSAFTResponse>(OPERATION_DEFINITIONS.SaftImportSAFT_importSAFT, args);
  }

}

export class SalaryResource extends BaseClient {
  SalaryCompilation_get(args: SalaryCompilation_getArgs = {}): Promise<SalaryCompilation_getResponse> {
    return this.callOperation<SalaryCompilation_getResponse>(OPERATION_DEFINITIONS.SalaryCompilation_get, args);
  }

  SalaryCompilation_getWithMeta(args: SalaryCompilation_getArgs = {}): Promise<ApiResult<SalaryCompilation_getResponse>> {
    return this.callOperationWithMeta<SalaryCompilation_getResponse>(OPERATION_DEFINITIONS.SalaryCompilation_get, args);
  }

  SalaryCompilationPdf_downloadPdf(args: SalaryCompilationPdf_downloadPdfArgs = {}): Promise<SalaryCompilationPdf_downloadPdfResponse> {
    return this.callOperation<SalaryCompilationPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.SalaryCompilationPdf_downloadPdf, args);
  }

  SalaryCompilationPdf_downloadPdfWithMeta(args: SalaryCompilationPdf_downloadPdfArgs = {}): Promise<ApiResult<SalaryCompilationPdf_downloadPdfResponse>> {
    return this.callOperationWithMeta<SalaryCompilationPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.SalaryCompilationPdf_downloadPdf, args);
  }

  SalaryFinanceTaxReconciliationContext_postContext(args: SalaryFinanceTaxReconciliationContext_postContextArgs): Promise<SalaryFinanceTaxReconciliationContext_postContextResponse> {
    return this.callOperation<SalaryFinanceTaxReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationContext_postContext, args);
  }

  SalaryFinanceTaxReconciliationContext_postContextWithMeta(args: SalaryFinanceTaxReconciliationContext_postContextArgs): Promise<ApiResult<SalaryFinanceTaxReconciliationContext_postContextResponse>> {
    return this.callOperationWithMeta<SalaryFinanceTaxReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationContext_postContext, args);
  }

  SalaryFinanceTaxReconciliationOverview_getOverview(args: SalaryFinanceTaxReconciliationOverview_getOverviewArgs): Promise<SalaryFinanceTaxReconciliationOverview_getOverviewResponse> {
    return this.callOperation<SalaryFinanceTaxReconciliationOverview_getOverviewResponse>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationOverview_getOverview, args);
  }

  SalaryFinanceTaxReconciliationOverview_getOverviewWithMeta(args: SalaryFinanceTaxReconciliationOverview_getOverviewArgs): Promise<ApiResult<SalaryFinanceTaxReconciliationOverview_getOverviewResponse>> {
    return this.callOperationWithMeta<SalaryFinanceTaxReconciliationOverview_getOverviewResponse>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationOverview_getOverview, args);
  }

  SalaryFinanceTaxReconciliationPaymentsOverview_getPayments(args: SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsArgs): Promise<SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsResponse> {
    return this.callOperation<SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsResponse>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsWithMeta(args: SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsArgs): Promise<ApiResult<SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsResponse>> {
    return this.callOperationWithMeta<SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsResponse>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryHolidayAllowanceReconciliationContext_postContext(args: SalaryHolidayAllowanceReconciliationContext_postContextArgs): Promise<SalaryHolidayAllowanceReconciliationContext_postContextResponse> {
    return this.callOperation<SalaryHolidayAllowanceReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationContext_postContext, args);
  }

  SalaryHolidayAllowanceReconciliationContext_postContextWithMeta(args: SalaryHolidayAllowanceReconciliationContext_postContextArgs): Promise<ApiResult<SalaryHolidayAllowanceReconciliationContext_postContextResponse>> {
    return this.callOperationWithMeta<SalaryHolidayAllowanceReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationContext_postContext, args);
  }

  SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails(args: SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsArgs): Promise<SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsResponse> {
    return this.callOperation<SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsResponse>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails, args);
  }

  SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsWithMeta(args: SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsArgs): Promise<ApiResult<SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsResponse>> {
    return this.callOperationWithMeta<SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsResponse>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails, args);
  }

  SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary(args: SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryArgs): Promise<SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryResponse> {
    return this.callOperation<SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryResponse>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary, args);
  }

  SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryWithMeta(args: SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryArgs): Promise<ApiResult<SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryResponse>> {
    return this.callOperationWithMeta<SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryResponse>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary, args);
  }

  SalaryMandatoryDeductionReconciliationContext_postContext(args: SalaryMandatoryDeductionReconciliationContext_postContextArgs): Promise<SalaryMandatoryDeductionReconciliationContext_postContextResponse> {
    return this.callOperation<SalaryMandatoryDeductionReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationContext_postContext, args);
  }

  SalaryMandatoryDeductionReconciliationContext_postContextWithMeta(args: SalaryMandatoryDeductionReconciliationContext_postContextArgs): Promise<ApiResult<SalaryMandatoryDeductionReconciliationContext_postContextResponse>> {
    return this.callOperationWithMeta<SalaryMandatoryDeductionReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationContext_postContext, args);
  }

  SalaryMandatoryDeductionReconciliationOverview_getOverview(args: SalaryMandatoryDeductionReconciliationOverview_getOverviewArgs): Promise<SalaryMandatoryDeductionReconciliationOverview_getOverviewResponse> {
    return this.callOperation<SalaryMandatoryDeductionReconciliationOverview_getOverviewResponse>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationOverview_getOverview, args);
  }

  SalaryMandatoryDeductionReconciliationOverview_getOverviewWithMeta(args: SalaryMandatoryDeductionReconciliationOverview_getOverviewArgs): Promise<ApiResult<SalaryMandatoryDeductionReconciliationOverview_getOverviewResponse>> {
    return this.callOperationWithMeta<SalaryMandatoryDeductionReconciliationOverview_getOverviewResponse>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationOverview_getOverview, args);
  }

  SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments(args: SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsArgs): Promise<SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsResponse> {
    return this.callOperation<SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsResponse>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsWithMeta(args: SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsArgs): Promise<ApiResult<SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsResponse>> {
    return this.callOperationWithMeta<SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsResponse>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryPayrollTaxReconciliationContext_postContext(args: SalaryPayrollTaxReconciliationContext_postContextArgs): Promise<SalaryPayrollTaxReconciliationContext_postContextResponse> {
    return this.callOperation<SalaryPayrollTaxReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationContext_postContext, args);
  }

  SalaryPayrollTaxReconciliationContext_postContextWithMeta(args: SalaryPayrollTaxReconciliationContext_postContextArgs): Promise<ApiResult<SalaryPayrollTaxReconciliationContext_postContextResponse>> {
    return this.callOperationWithMeta<SalaryPayrollTaxReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationContext_postContext, args);
  }

  SalaryPayrollTaxReconciliationOverview_getOverview(args: SalaryPayrollTaxReconciliationOverview_getOverviewArgs): Promise<SalaryPayrollTaxReconciliationOverview_getOverviewResponse> {
    return this.callOperation<SalaryPayrollTaxReconciliationOverview_getOverviewResponse>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationOverview_getOverview, args);
  }

  SalaryPayrollTaxReconciliationOverview_getOverviewWithMeta(args: SalaryPayrollTaxReconciliationOverview_getOverviewArgs): Promise<ApiResult<SalaryPayrollTaxReconciliationOverview_getOverviewResponse>> {
    return this.callOperationWithMeta<SalaryPayrollTaxReconciliationOverview_getOverviewResponse>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationOverview_getOverview, args);
  }

  SalaryPayrollTaxReconciliationPaymentsOverview_getPayments(args: SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsArgs): Promise<SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsResponse> {
    return this.callOperation<SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsResponse>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsWithMeta(args: SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsArgs): Promise<ApiResult<SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsResponse>> {
    return this.callOperationWithMeta<SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsResponse>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryPayslip_get(args: SalaryPayslip_getArgs): Promise<SalaryPayslip_getResponse> {
    return this.callOperation<SalaryPayslip_getResponse>(OPERATION_DEFINITIONS.SalaryPayslip_get, args);
  }

  SalaryPayslip_getWithMeta(args: SalaryPayslip_getArgs): Promise<ApiResult<SalaryPayslip_getResponse>> {
    return this.callOperationWithMeta<SalaryPayslip_getResponse>(OPERATION_DEFINITIONS.SalaryPayslip_get, args);
  }

  SalaryPayslip_search(args: SalaryPayslip_searchArgs = {}): Promise<SalaryPayslip_searchResponse> {
    return this.callOperation<SalaryPayslip_searchResponse>(OPERATION_DEFINITIONS.SalaryPayslip_search, args);
  }

  SalaryPayslip_searchWithMeta(args: SalaryPayslip_searchArgs = {}): Promise<ApiResult<SalaryPayslip_searchResponse>> {
    return this.callOperationWithMeta<SalaryPayslip_searchResponse>(OPERATION_DEFINITIONS.SalaryPayslip_search, args);
  }

  SalaryPayslipPdf_downloadPdf(args: SalaryPayslipPdf_downloadPdfArgs): Promise<SalaryPayslipPdf_downloadPdfResponse> {
    return this.callOperation<SalaryPayslipPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.SalaryPayslipPdf_downloadPdf, args);
  }

  SalaryPayslipPdf_downloadPdfWithMeta(args: SalaryPayslipPdf_downloadPdfArgs): Promise<ApiResult<SalaryPayslipPdf_downloadPdfResponse>> {
    return this.callOperationWithMeta<SalaryPayslipPdf_downloadPdfResponse>(OPERATION_DEFINITIONS.SalaryPayslipPdf_downloadPdf, args);
  }

  SalarySettings_get(args: SalarySettings_getArgs = {}): Promise<SalarySettings_getResponse> {
    return this.callOperation<SalarySettings_getResponse>(OPERATION_DEFINITIONS.SalarySettings_get, args);
  }

  SalarySettings_getWithMeta(args: SalarySettings_getArgs = {}): Promise<ApiResult<SalarySettings_getResponse>> {
    return this.callOperationWithMeta<SalarySettings_getResponse>(OPERATION_DEFINITIONS.SalarySettings_get, args);
  }

  SalarySettings_put(args: SalarySettings_putArgs): Promise<SalarySettings_putResponse> {
    return this.callOperation<SalarySettings_putResponse>(OPERATION_DEFINITIONS.SalarySettings_put, args);
  }

  SalarySettings_putWithMeta(args: SalarySettings_putArgs): Promise<ApiResult<SalarySettings_putResponse>> {
    return this.callOperationWithMeta<SalarySettings_putResponse>(OPERATION_DEFINITIONS.SalarySettings_put, args);
  }

  SalarySettingsHoliday_post(args: SalarySettingsHoliday_postArgs): Promise<SalarySettingsHoliday_postResponse> {
    return this.callOperation<SalarySettingsHoliday_postResponse>(OPERATION_DEFINITIONS.SalarySettingsHoliday_post, args);
  }

  SalarySettingsHoliday_postWithMeta(args: SalarySettingsHoliday_postArgs): Promise<ApiResult<SalarySettingsHoliday_postResponse>> {
    return this.callOperationWithMeta<SalarySettingsHoliday_postResponse>(OPERATION_DEFINITIONS.SalarySettingsHoliday_post, args);
  }

  SalarySettingsHoliday_put(args: SalarySettingsHoliday_putArgs): Promise<SalarySettingsHoliday_putResponse> {
    return this.callOperation<SalarySettingsHoliday_putResponse>(OPERATION_DEFINITIONS.SalarySettingsHoliday_put, args);
  }

  SalarySettingsHoliday_putWithMeta(args: SalarySettingsHoliday_putArgs): Promise<ApiResult<SalarySettingsHoliday_putResponse>> {
    return this.callOperationWithMeta<SalarySettingsHoliday_putResponse>(OPERATION_DEFINITIONS.SalarySettingsHoliday_put, args);
  }

  SalarySettingsHoliday_search(args: SalarySettingsHoliday_searchArgs = {}): Promise<SalarySettingsHoliday_searchResponse> {
    return this.callOperation<SalarySettingsHoliday_searchResponse>(OPERATION_DEFINITIONS.SalarySettingsHoliday_search, args);
  }

  SalarySettingsHoliday_searchWithMeta(args: SalarySettingsHoliday_searchArgs = {}): Promise<ApiResult<SalarySettingsHoliday_searchResponse>> {
    return this.callOperationWithMeta<SalarySettingsHoliday_searchResponse>(OPERATION_DEFINITIONS.SalarySettingsHoliday_search, args);
  }

  SalarySettingsHolidayList_deleteByIds(args: SalarySettingsHolidayList_deleteByIdsArgs = {}): Promise<SalarySettingsHolidayList_deleteByIdsResponse> {
    return this.callOperation<SalarySettingsHolidayList_deleteByIdsResponse>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_deleteByIds, args);
  }

  SalarySettingsHolidayList_deleteByIdsWithMeta(args: SalarySettingsHolidayList_deleteByIdsArgs = {}): Promise<ApiResult<SalarySettingsHolidayList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<SalarySettingsHolidayList_deleteByIdsResponse>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_deleteByIds, args);
  }

  SalarySettingsHolidayList_postList(args: SalarySettingsHolidayList_postListArgs): Promise<SalarySettingsHolidayList_postListResponse> {
    return this.callOperation<SalarySettingsHolidayList_postListResponse>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_postList, args);
  }

  SalarySettingsHolidayList_postListWithMeta(args: SalarySettingsHolidayList_postListArgs): Promise<ApiResult<SalarySettingsHolidayList_postListResponse>> {
    return this.callOperationWithMeta<SalarySettingsHolidayList_postListResponse>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_postList, args);
  }

  SalarySettingsHolidayList_putList(args: SalarySettingsHolidayList_putListArgs): Promise<SalarySettingsHolidayList_putListResponse> {
    return this.callOperation<SalarySettingsHolidayList_putListResponse>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_putList, args);
  }

  SalarySettingsHolidayList_putListWithMeta(args: SalarySettingsHolidayList_putListArgs): Promise<ApiResult<SalarySettingsHolidayList_putListResponse>> {
    return this.callOperationWithMeta<SalarySettingsHolidayList_putListResponse>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_putList, args);
  }

  SalarySettingsPensionScheme_delete(args: SalarySettingsPensionScheme_deleteArgs): Promise<SalarySettingsPensionScheme_deleteResponse> {
    return this.callOperation<SalarySettingsPensionScheme_deleteResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_delete, args);
  }

  SalarySettingsPensionScheme_deleteWithMeta(args: SalarySettingsPensionScheme_deleteArgs): Promise<ApiResult<SalarySettingsPensionScheme_deleteResponse>> {
    return this.callOperationWithMeta<SalarySettingsPensionScheme_deleteResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_delete, args);
  }

  SalarySettingsPensionScheme_get(args: SalarySettingsPensionScheme_getArgs): Promise<SalarySettingsPensionScheme_getResponse> {
    return this.callOperation<SalarySettingsPensionScheme_getResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_get, args);
  }

  SalarySettingsPensionScheme_getWithMeta(args: SalarySettingsPensionScheme_getArgs): Promise<ApiResult<SalarySettingsPensionScheme_getResponse>> {
    return this.callOperationWithMeta<SalarySettingsPensionScheme_getResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_get, args);
  }

  SalarySettingsPensionScheme_post(args: SalarySettingsPensionScheme_postArgs): Promise<SalarySettingsPensionScheme_postResponse> {
    return this.callOperation<SalarySettingsPensionScheme_postResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_post, args);
  }

  SalarySettingsPensionScheme_postWithMeta(args: SalarySettingsPensionScheme_postArgs): Promise<ApiResult<SalarySettingsPensionScheme_postResponse>> {
    return this.callOperationWithMeta<SalarySettingsPensionScheme_postResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_post, args);
  }

  SalarySettingsPensionScheme_put(args: SalarySettingsPensionScheme_putArgs): Promise<SalarySettingsPensionScheme_putResponse> {
    return this.callOperation<SalarySettingsPensionScheme_putResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_put, args);
  }

  SalarySettingsPensionScheme_putWithMeta(args: SalarySettingsPensionScheme_putArgs): Promise<ApiResult<SalarySettingsPensionScheme_putResponse>> {
    return this.callOperationWithMeta<SalarySettingsPensionScheme_putResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_put, args);
  }

  SalarySettingsPensionScheme_search(args: SalarySettingsPensionScheme_searchArgs = {}): Promise<SalarySettingsPensionScheme_searchResponse> {
    return this.callOperation<SalarySettingsPensionScheme_searchResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_search, args);
  }

  SalarySettingsPensionScheme_searchWithMeta(args: SalarySettingsPensionScheme_searchArgs = {}): Promise<ApiResult<SalarySettingsPensionScheme_searchResponse>> {
    return this.callOperationWithMeta<SalarySettingsPensionScheme_searchResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_search, args);
  }

  SalarySettingsPensionSchemeList_deleteByIds(args: SalarySettingsPensionSchemeList_deleteByIdsArgs = {}): Promise<SalarySettingsPensionSchemeList_deleteByIdsResponse> {
    return this.callOperation<SalarySettingsPensionSchemeList_deleteByIdsResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_deleteByIds, args);
  }

  SalarySettingsPensionSchemeList_deleteByIdsWithMeta(args: SalarySettingsPensionSchemeList_deleteByIdsArgs = {}): Promise<ApiResult<SalarySettingsPensionSchemeList_deleteByIdsResponse>> {
    return this.callOperationWithMeta<SalarySettingsPensionSchemeList_deleteByIdsResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_deleteByIds, args);
  }

  SalarySettingsPensionSchemeList_postList(args: SalarySettingsPensionSchemeList_postListArgs): Promise<SalarySettingsPensionSchemeList_postListResponse> {
    return this.callOperation<SalarySettingsPensionSchemeList_postListResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_postList, args);
  }

  SalarySettingsPensionSchemeList_postListWithMeta(args: SalarySettingsPensionSchemeList_postListArgs): Promise<ApiResult<SalarySettingsPensionSchemeList_postListResponse>> {
    return this.callOperationWithMeta<SalarySettingsPensionSchemeList_postListResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_postList, args);
  }

  SalarySettingsPensionSchemeList_putList(args: SalarySettingsPensionSchemeList_putListArgs): Promise<SalarySettingsPensionSchemeList_putListResponse> {
    return this.callOperation<SalarySettingsPensionSchemeList_putListResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_putList, args);
  }

  SalarySettingsPensionSchemeList_putListWithMeta(args: SalarySettingsPensionSchemeList_putListArgs): Promise<ApiResult<SalarySettingsPensionSchemeList_putListResponse>> {
    return this.callOperationWithMeta<SalarySettingsPensionSchemeList_putListResponse>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_putList, args);
  }

  SalarySettingsStandardTime_get(args: SalarySettingsStandardTime_getArgs): Promise<SalarySettingsStandardTime_getResponse> {
    return this.callOperation<SalarySettingsStandardTime_getResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_get, args);
  }

  SalarySettingsStandardTime_getWithMeta(args: SalarySettingsStandardTime_getArgs): Promise<ApiResult<SalarySettingsStandardTime_getResponse>> {
    return this.callOperationWithMeta<SalarySettingsStandardTime_getResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_get, args);
  }

  SalarySettingsStandardTime_post(args: SalarySettingsStandardTime_postArgs): Promise<SalarySettingsStandardTime_postResponse> {
    return this.callOperation<SalarySettingsStandardTime_postResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_post, args);
  }

  SalarySettingsStandardTime_postWithMeta(args: SalarySettingsStandardTime_postArgs): Promise<ApiResult<SalarySettingsStandardTime_postResponse>> {
    return this.callOperationWithMeta<SalarySettingsStandardTime_postResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_post, args);
  }

  SalarySettingsStandardTime_put(args: SalarySettingsStandardTime_putArgs): Promise<SalarySettingsStandardTime_putResponse> {
    return this.callOperation<SalarySettingsStandardTime_putResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_put, args);
  }

  SalarySettingsStandardTime_putWithMeta(args: SalarySettingsStandardTime_putArgs): Promise<ApiResult<SalarySettingsStandardTime_putResponse>> {
    return this.callOperationWithMeta<SalarySettingsStandardTime_putResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_put, args);
  }

  SalarySettingsStandardTime_search(args: SalarySettingsStandardTime_searchArgs = {}): Promise<SalarySettingsStandardTime_searchResponse> {
    return this.callOperation<SalarySettingsStandardTime_searchResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_search, args);
  }

  SalarySettingsStandardTime_searchWithMeta(args: SalarySettingsStandardTime_searchArgs = {}): Promise<ApiResult<SalarySettingsStandardTime_searchResponse>> {
    return this.callOperationWithMeta<SalarySettingsStandardTime_searchResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_search, args);
  }

  SalarySettingsStandardTimeByDate_getByDate(args: SalarySettingsStandardTimeByDate_getByDateArgs = {}): Promise<SalarySettingsStandardTimeByDate_getByDateResponse> {
    return this.callOperation<SalarySettingsStandardTimeByDate_getByDateResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTimeByDate_getByDate, args);
  }

  SalarySettingsStandardTimeByDate_getByDateWithMeta(args: SalarySettingsStandardTimeByDate_getByDateArgs = {}): Promise<ApiResult<SalarySettingsStandardTimeByDate_getByDateResponse>> {
    return this.callOperationWithMeta<SalarySettingsStandardTimeByDate_getByDateResponse>(OPERATION_DEFINITIONS.SalarySettingsStandardTimeByDate_getByDate, args);
  }

  SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails(args: SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsArgs): Promise<SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsResponse> {
    return this.callOperation<SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsResponse>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails, args);
  }

  SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsWithMeta(args: SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsArgs): Promise<ApiResult<SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsResponse>> {
    return this.callOperationWithMeta<SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsResponse>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails, args);
  }

  SalaryTaxDeductionReconciliationContext_postContext(args: SalaryTaxDeductionReconciliationContext_postContextArgs): Promise<SalaryTaxDeductionReconciliationContext_postContextResponse> {
    return this.callOperation<SalaryTaxDeductionReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationContext_postContext, args);
  }

  SalaryTaxDeductionReconciliationContext_postContextWithMeta(args: SalaryTaxDeductionReconciliationContext_postContextArgs): Promise<ApiResult<SalaryTaxDeductionReconciliationContext_postContextResponse>> {
    return this.callOperationWithMeta<SalaryTaxDeductionReconciliationContext_postContextResponse>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationContext_postContext, args);
  }

  SalaryTaxDeductionReconciliationOverview_getOverview(args: SalaryTaxDeductionReconciliationOverview_getOverviewArgs): Promise<SalaryTaxDeductionReconciliationOverview_getOverviewResponse> {
    return this.callOperation<SalaryTaxDeductionReconciliationOverview_getOverviewResponse>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationOverview_getOverview, args);
  }

  SalaryTaxDeductionReconciliationOverview_getOverviewWithMeta(args: SalaryTaxDeductionReconciliationOverview_getOverviewArgs): Promise<ApiResult<SalaryTaxDeductionReconciliationOverview_getOverviewResponse>> {
    return this.callOperationWithMeta<SalaryTaxDeductionReconciliationOverview_getOverviewResponse>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationOverview_getOverview, args);
  }

  SalaryTaxDeductionReconciliationPaymentsOverview_getPayments(args: SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsArgs): Promise<SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsResponse> {
    return this.callOperation<SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsResponse>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsWithMeta(args: SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsArgs): Promise<ApiResult<SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsResponse>> {
    return this.callOperationWithMeta<SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsResponse>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryTransaction_delete(args: SalaryTransaction_deleteArgs): Promise<SalaryTransaction_deleteResponse> {
    return this.callOperation<SalaryTransaction_deleteResponse>(OPERATION_DEFINITIONS.SalaryTransaction_delete, args);
  }

  SalaryTransaction_deleteWithMeta(args: SalaryTransaction_deleteArgs): Promise<ApiResult<SalaryTransaction_deleteResponse>> {
    return this.callOperationWithMeta<SalaryTransaction_deleteResponse>(OPERATION_DEFINITIONS.SalaryTransaction_delete, args);
  }

  SalaryTransaction_get(args: SalaryTransaction_getArgs): Promise<SalaryTransaction_getResponse> {
    return this.callOperation<SalaryTransaction_getResponse>(OPERATION_DEFINITIONS.SalaryTransaction_get, args);
  }

  SalaryTransaction_getWithMeta(args: SalaryTransaction_getArgs): Promise<ApiResult<SalaryTransaction_getResponse>> {
    return this.callOperationWithMeta<SalaryTransaction_getResponse>(OPERATION_DEFINITIONS.SalaryTransaction_get, args);
  }

  SalaryTransaction_post(args: SalaryTransaction_postArgs): Promise<SalaryTransaction_postResponse> {
    return this.callOperation<SalaryTransaction_postResponse>(OPERATION_DEFINITIONS.SalaryTransaction_post, args);
  }

  SalaryTransaction_postWithMeta(args: SalaryTransaction_postArgs): Promise<ApiResult<SalaryTransaction_postResponse>> {
    return this.callOperationWithMeta<SalaryTransaction_postResponse>(OPERATION_DEFINITIONS.SalaryTransaction_post, args);
  }

  SalaryTransactionAttachment_uploadAttachment(args: SalaryTransactionAttachment_uploadAttachmentArgs): Promise<SalaryTransactionAttachment_uploadAttachmentResponse> {
    return this.callOperation<SalaryTransactionAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.SalaryTransactionAttachment_uploadAttachment, args);
  }

  SalaryTransactionAttachment_uploadAttachmentWithMeta(args: SalaryTransactionAttachment_uploadAttachmentArgs): Promise<ApiResult<SalaryTransactionAttachment_uploadAttachmentResponse>> {
    return this.callOperationWithMeta<SalaryTransactionAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.SalaryTransactionAttachment_uploadAttachment, args);
  }

  SalaryTransactionAttachmentList_uploadAttachments(args: SalaryTransactionAttachmentList_uploadAttachmentsArgs): Promise<SalaryTransactionAttachmentList_uploadAttachmentsResponse> {
    return this.callOperation<SalaryTransactionAttachmentList_uploadAttachmentsResponse>(OPERATION_DEFINITIONS.SalaryTransactionAttachmentList_uploadAttachments, args);
  }

  SalaryTransactionAttachmentList_uploadAttachmentsWithMeta(args: SalaryTransactionAttachmentList_uploadAttachmentsArgs): Promise<ApiResult<SalaryTransactionAttachmentList_uploadAttachmentsResponse>> {
    return this.callOperationWithMeta<SalaryTransactionAttachmentList_uploadAttachmentsResponse>(OPERATION_DEFINITIONS.SalaryTransactionAttachmentList_uploadAttachments, args);
  }

  SalaryTransactionDeleteAttachment_deleteAttachment(args: SalaryTransactionDeleteAttachment_deleteAttachmentArgs): Promise<SalaryTransactionDeleteAttachment_deleteAttachmentResponse> {
    return this.callOperation<SalaryTransactionDeleteAttachment_deleteAttachmentResponse>(OPERATION_DEFINITIONS.SalaryTransactionDeleteAttachment_deleteAttachment, args);
  }

  SalaryTransactionDeleteAttachment_deleteAttachmentWithMeta(args: SalaryTransactionDeleteAttachment_deleteAttachmentArgs): Promise<ApiResult<SalaryTransactionDeleteAttachment_deleteAttachmentResponse>> {
    return this.callOperationWithMeta<SalaryTransactionDeleteAttachment_deleteAttachmentResponse>(OPERATION_DEFINITIONS.SalaryTransactionDeleteAttachment_deleteAttachment, args);
  }

  SalaryType_get(args: SalaryType_getArgs): Promise<SalaryType_getResponse> {
    return this.callOperation<SalaryType_getResponse>(OPERATION_DEFINITIONS.SalaryType_get, args);
  }

  SalaryType_getWithMeta(args: SalaryType_getArgs): Promise<ApiResult<SalaryType_getResponse>> {
    return this.callOperationWithMeta<SalaryType_getResponse>(OPERATION_DEFINITIONS.SalaryType_get, args);
  }

  SalaryType_search(args: SalaryType_searchArgs = {}): Promise<SalaryType_searchResponse> {
    return this.callOperation<SalaryType_searchResponse>(OPERATION_DEFINITIONS.SalaryType_search, args);
  }

  SalaryType_searchWithMeta(args: SalaryType_searchArgs = {}): Promise<ApiResult<SalaryType_searchResponse>> {
    return this.callOperationWithMeta<SalaryType_searchResponse>(OPERATION_DEFINITIONS.SalaryType_search, args);
  }

}

export class SubscriptionResource extends BaseClient {
  SubscriptionCancel_cancel(args: SubscriptionCancel_cancelArgs): Promise<SubscriptionCancel_cancelResponse> {
    return this.callOperation<SubscriptionCancel_cancelResponse>(OPERATION_DEFINITIONS.SubscriptionCancel_cancel, args);
  }

  SubscriptionCancel_cancelWithMeta(args: SubscriptionCancel_cancelArgs): Promise<ApiResult<SubscriptionCancel_cancelResponse>> {
    return this.callOperationWithMeta<SubscriptionCancel_cancelResponse>(OPERATION_DEFINITIONS.SubscriptionCancel_cancel, args);
  }

  SubscriptionPackages_getPackages(args: SubscriptionPackages_getPackagesArgs = {}): Promise<SubscriptionPackages_getPackagesResponse> {
    return this.callOperation<SubscriptionPackages_getPackagesResponse>(OPERATION_DEFINITIONS.SubscriptionPackages_getPackages, args);
  }

  SubscriptionPackages_getPackagesWithMeta(args: SubscriptionPackages_getPackagesArgs = {}): Promise<ApiResult<SubscriptionPackages_getPackagesResponse>> {
    return this.callOperationWithMeta<SubscriptionPackages_getPackagesResponse>(OPERATION_DEFINITIONS.SubscriptionPackages_getPackages, args);
  }

  SubscriptionReactivate_reactivate(args: SubscriptionReactivate_reactivateArgs = {}): Promise<SubscriptionReactivate_reactivateResponse> {
    return this.callOperation<SubscriptionReactivate_reactivateResponse>(OPERATION_DEFINITIONS.SubscriptionReactivate_reactivate, args);
  }

  SubscriptionReactivate_reactivateWithMeta(args: SubscriptionReactivate_reactivateArgs = {}): Promise<ApiResult<SubscriptionReactivate_reactivateResponse>> {
    return this.callOperationWithMeta<SubscriptionReactivate_reactivateResponse>(OPERATION_DEFINITIONS.SubscriptionReactivate_reactivate, args);
  }

}

export class SupplierResource extends BaseClient {
  Supplier_delete(args: Supplier_deleteArgs): Promise<Supplier_deleteResponse> {
    return this.callOperation<Supplier_deleteResponse>(OPERATION_DEFINITIONS.Supplier_delete, args);
  }

  Supplier_deleteWithMeta(args: Supplier_deleteArgs): Promise<ApiResult<Supplier_deleteResponse>> {
    return this.callOperationWithMeta<Supplier_deleteResponse>(OPERATION_DEFINITIONS.Supplier_delete, args);
  }

  Supplier_get(args: Supplier_getArgs): Promise<Supplier_getResponse> {
    return this.callOperation<Supplier_getResponse>(OPERATION_DEFINITIONS.Supplier_get, args);
  }

  Supplier_getWithMeta(args: Supplier_getArgs): Promise<ApiResult<Supplier_getResponse>> {
    return this.callOperationWithMeta<Supplier_getResponse>(OPERATION_DEFINITIONS.Supplier_get, args);
  }

  Supplier_post(args: Supplier_postArgs): Promise<Supplier_postResponse> {
    return this.callOperation<Supplier_postResponse>(OPERATION_DEFINITIONS.Supplier_post, args);
  }

  Supplier_postWithMeta(args: Supplier_postArgs): Promise<ApiResult<Supplier_postResponse>> {
    return this.callOperationWithMeta<Supplier_postResponse>(OPERATION_DEFINITIONS.Supplier_post, args);
  }

  Supplier_put(args: Supplier_putArgs): Promise<Supplier_putResponse> {
    return this.callOperation<Supplier_putResponse>(OPERATION_DEFINITIONS.Supplier_put, args);
  }

  Supplier_putWithMeta(args: Supplier_putArgs): Promise<ApiResult<Supplier_putResponse>> {
    return this.callOperationWithMeta<Supplier_putResponse>(OPERATION_DEFINITIONS.Supplier_put, args);
  }

  Supplier_search(args: Supplier_searchArgs = {}): Promise<Supplier_searchResponse> {
    return this.callOperation<Supplier_searchResponse>(OPERATION_DEFINITIONS.Supplier_search, args);
  }

  Supplier_searchWithMeta(args: Supplier_searchArgs = {}): Promise<ApiResult<Supplier_searchResponse>> {
    return this.callOperationWithMeta<Supplier_searchResponse>(OPERATION_DEFINITIONS.Supplier_search, args);
  }

  SupplierList_postList(args: SupplierList_postListArgs): Promise<SupplierList_postListResponse> {
    return this.callOperation<SupplierList_postListResponse>(OPERATION_DEFINITIONS.SupplierList_postList, args);
  }

  SupplierList_postListWithMeta(args: SupplierList_postListArgs): Promise<ApiResult<SupplierList_postListResponse>> {
    return this.callOperationWithMeta<SupplierList_postListResponse>(OPERATION_DEFINITIONS.SupplierList_postList, args);
  }

  SupplierList_putList(args: SupplierList_putListArgs): Promise<SupplierList_putListResponse> {
    return this.callOperation<SupplierList_putListResponse>(OPERATION_DEFINITIONS.SupplierList_putList, args);
  }

  SupplierList_putListWithMeta(args: SupplierList_putListArgs): Promise<ApiResult<SupplierList_putListResponse>> {
    return this.callOperationWithMeta<SupplierList_putListResponse>(OPERATION_DEFINITIONS.SupplierList_putList, args);
  }

}

export class SupplierCustomerResource extends BaseClient {
  SupplierCustomerSearch_search(args: SupplierCustomerSearch_searchArgs = {}): Promise<SupplierCustomerSearch_searchResponse> {
    return this.callOperation<SupplierCustomerSearch_searchResponse>(OPERATION_DEFINITIONS.SupplierCustomerSearch_search, args);
  }

  SupplierCustomerSearch_searchWithMeta(args: SupplierCustomerSearch_searchArgs = {}): Promise<ApiResult<SupplierCustomerSearch_searchResponse>> {
    return this.callOperationWithMeta<SupplierCustomerSearch_searchResponse>(OPERATION_DEFINITIONS.SupplierCustomerSearch_search, args);
  }

}

export class SupplierInvoiceResource extends BaseClient {
  SupplierInvoice_get(args: SupplierInvoice_getArgs): Promise<SupplierInvoice_getResponse> {
    return this.callOperation<SupplierInvoice_getResponse>(OPERATION_DEFINITIONS.SupplierInvoice_get, args);
  }

  SupplierInvoice_getWithMeta(args: SupplierInvoice_getArgs): Promise<ApiResult<SupplierInvoice_getResponse>> {
    return this.callOperationWithMeta<SupplierInvoice_getResponse>(OPERATION_DEFINITIONS.SupplierInvoice_get, args);
  }

  SupplierInvoice_search(args: SupplierInvoice_searchArgs = {}): Promise<SupplierInvoice_searchResponse> {
    return this.callOperation<SupplierInvoice_searchResponse>(OPERATION_DEFINITIONS.SupplierInvoice_search, args);
  }

  SupplierInvoice_searchWithMeta(args: SupplierInvoice_searchArgs = {}): Promise<ApiResult<SupplierInvoice_searchResponse>> {
    return this.callOperationWithMeta<SupplierInvoice_searchResponse>(OPERATION_DEFINITIONS.SupplierInvoice_search, args);
  }

  SupplierInvoiceAddPayment_addPayment(args: SupplierInvoiceAddPayment_addPaymentArgs): Promise<SupplierInvoiceAddPayment_addPaymentResponse> {
    return this.callOperation<SupplierInvoiceAddPayment_addPaymentResponse>(OPERATION_DEFINITIONS.SupplierInvoiceAddPayment_addPayment, args);
  }

  SupplierInvoiceAddPayment_addPaymentWithMeta(args: SupplierInvoiceAddPayment_addPaymentArgs): Promise<ApiResult<SupplierInvoiceAddPayment_addPaymentResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceAddPayment_addPaymentResponse>(OPERATION_DEFINITIONS.SupplierInvoiceAddPayment_addPayment, args);
  }

  SupplierInvoiceAddRecipient_addRecipient(args: SupplierInvoiceAddRecipient_addRecipientArgs): Promise<SupplierInvoiceAddRecipient_addRecipientResponse> {
    return this.callOperation<SupplierInvoiceAddRecipient_addRecipientResponse>(OPERATION_DEFINITIONS.SupplierInvoiceAddRecipient_addRecipient, args);
  }

  SupplierInvoiceAddRecipient_addRecipientWithMeta(args: SupplierInvoiceAddRecipient_addRecipientArgs): Promise<ApiResult<SupplierInvoiceAddRecipient_addRecipientResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceAddRecipient_addRecipientResponse>(OPERATION_DEFINITIONS.SupplierInvoiceAddRecipient_addRecipient, args);
  }

  SupplierInvoiceAddRecipient_addRecipientToMany(args: SupplierInvoiceAddRecipient_addRecipientToManyArgs = {}): Promise<SupplierInvoiceAddRecipient_addRecipientToManyResponse> {
    return this.callOperation<SupplierInvoiceAddRecipient_addRecipientToManyResponse>(OPERATION_DEFINITIONS.SupplierInvoiceAddRecipient_addRecipientToMany, args);
  }

  SupplierInvoiceAddRecipient_addRecipientToManyWithMeta(args: SupplierInvoiceAddRecipient_addRecipientToManyArgs = {}): Promise<ApiResult<SupplierInvoiceAddRecipient_addRecipientToManyResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceAddRecipient_addRecipientToManyResponse>(OPERATION_DEFINITIONS.SupplierInvoiceAddRecipient_addRecipientToMany, args);
  }

  SupplierInvoiceApprove_approve(args: SupplierInvoiceApprove_approveArgs): Promise<SupplierInvoiceApprove_approveResponse> {
    return this.callOperation<SupplierInvoiceApprove_approveResponse>(OPERATION_DEFINITIONS.SupplierInvoiceApprove_approve, args);
  }

  SupplierInvoiceApprove_approveWithMeta(args: SupplierInvoiceApprove_approveArgs): Promise<ApiResult<SupplierInvoiceApprove_approveResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceApprove_approveResponse>(OPERATION_DEFINITIONS.SupplierInvoiceApprove_approve, args);
  }

  SupplierInvoiceApprove_approveMany(args: SupplierInvoiceApprove_approveManyArgs = {}): Promise<SupplierInvoiceApprove_approveManyResponse> {
    return this.callOperation<SupplierInvoiceApprove_approveManyResponse>(OPERATION_DEFINITIONS.SupplierInvoiceApprove_approveMany, args);
  }

  SupplierInvoiceApprove_approveManyWithMeta(args: SupplierInvoiceApprove_approveManyArgs = {}): Promise<ApiResult<SupplierInvoiceApprove_approveManyResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceApprove_approveManyResponse>(OPERATION_DEFINITIONS.SupplierInvoiceApprove_approveMany, args);
  }

  SupplierInvoiceChangeDimension_changeDimensionMany(args: SupplierInvoiceChangeDimension_changeDimensionManyArgs): Promise<SupplierInvoiceChangeDimension_changeDimensionManyResponse> {
    return this.callOperation<SupplierInvoiceChangeDimension_changeDimensionManyResponse>(OPERATION_DEFINITIONS.SupplierInvoiceChangeDimension_changeDimensionMany, args);
  }

  SupplierInvoiceChangeDimension_changeDimensionManyWithMeta(args: SupplierInvoiceChangeDimension_changeDimensionManyArgs): Promise<ApiResult<SupplierInvoiceChangeDimension_changeDimensionManyResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceChangeDimension_changeDimensionManyResponse>(OPERATION_DEFINITIONS.SupplierInvoiceChangeDimension_changeDimensionMany, args);
  }

  SupplierInvoiceForApproval_getApprovalInvoices(args: SupplierInvoiceForApproval_getApprovalInvoicesArgs = {}): Promise<SupplierInvoiceForApproval_getApprovalInvoicesResponse> {
    return this.callOperation<SupplierInvoiceForApproval_getApprovalInvoicesResponse>(OPERATION_DEFINITIONS.SupplierInvoiceForApproval_getApprovalInvoices, args);
  }

  SupplierInvoiceForApproval_getApprovalInvoicesWithMeta(args: SupplierInvoiceForApproval_getApprovalInvoicesArgs = {}): Promise<ApiResult<SupplierInvoiceForApproval_getApprovalInvoicesResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceForApproval_getApprovalInvoicesResponse>(OPERATION_DEFINITIONS.SupplierInvoiceForApproval_getApprovalInvoices, args);
  }

  SupplierInvoicePdf_downloadPdf(args: SupplierInvoicePdf_downloadPdfArgs): Promise<SupplierInvoicePdf_downloadPdfResponse> {
    return this.callOperation<SupplierInvoicePdf_downloadPdfResponse>(OPERATION_DEFINITIONS.SupplierInvoicePdf_downloadPdf, args);
  }

  SupplierInvoicePdf_downloadPdfWithMeta(args: SupplierInvoicePdf_downloadPdfArgs): Promise<ApiResult<SupplierInvoicePdf_downloadPdfResponse>> {
    return this.callOperationWithMeta<SupplierInvoicePdf_downloadPdfResponse>(OPERATION_DEFINITIONS.SupplierInvoicePdf_downloadPdf, args);
  }

  SupplierInvoiceReject_reject(args: SupplierInvoiceReject_rejectArgs): Promise<SupplierInvoiceReject_rejectResponse> {
    return this.callOperation<SupplierInvoiceReject_rejectResponse>(OPERATION_DEFINITIONS.SupplierInvoiceReject_reject, args);
  }

  SupplierInvoiceReject_rejectWithMeta(args: SupplierInvoiceReject_rejectArgs): Promise<ApiResult<SupplierInvoiceReject_rejectResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceReject_rejectResponse>(OPERATION_DEFINITIONS.SupplierInvoiceReject_reject, args);
  }

  SupplierInvoiceReject_rejectMany(args: SupplierInvoiceReject_rejectManyArgs = {}): Promise<SupplierInvoiceReject_rejectManyResponse> {
    return this.callOperation<SupplierInvoiceReject_rejectManyResponse>(OPERATION_DEFINITIONS.SupplierInvoiceReject_rejectMany, args);
  }

  SupplierInvoiceReject_rejectManyWithMeta(args: SupplierInvoiceReject_rejectManyArgs = {}): Promise<ApiResult<SupplierInvoiceReject_rejectManyResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceReject_rejectManyResponse>(OPERATION_DEFINITIONS.SupplierInvoiceReject_rejectMany, args);
  }

  SupplierInvoiceVoucherPostings_putPostings(args: SupplierInvoiceVoucherPostings_putPostingsArgs): Promise<SupplierInvoiceVoucherPostings_putPostingsResponse> {
    return this.callOperation<SupplierInvoiceVoucherPostings_putPostingsResponse>(OPERATION_DEFINITIONS.SupplierInvoiceVoucherPostings_putPostings, args);
  }

  SupplierInvoiceVoucherPostings_putPostingsWithMeta(args: SupplierInvoiceVoucherPostings_putPostingsArgs): Promise<ApiResult<SupplierInvoiceVoucherPostings_putPostingsResponse>> {
    return this.callOperationWithMeta<SupplierInvoiceVoucherPostings_putPostingsResponse>(OPERATION_DEFINITIONS.SupplierInvoiceVoucherPostings_putPostings, args);
  }

}

export class SupportDashboardResource extends BaseClient {
  SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers(args: SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersArgs = {}): Promise<SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersResponse> {
    return this.callOperation<SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersResponse>(OPERATION_DEFINITIONS.SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers, args);
  }

  SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersWithMeta(args: SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersArgs = {}): Promise<ApiResult<SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersResponse>> {
    return this.callOperationWithMeta<SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersResponse>(OPERATION_DEFINITIONS.SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers, args);
  }

  SupportDashboardExport_export(args: SupportDashboardExport_exportArgs = {}): Promise<SupportDashboardExport_exportResponse> {
    return this.callOperation<SupportDashboardExport_exportResponse>(OPERATION_DEFINITIONS.SupportDashboardExport_export, args);
  }

  SupportDashboardExport_exportWithMeta(args: SupportDashboardExport_exportArgs = {}): Promise<ApiResult<SupportDashboardExport_exportResponse>> {
    return this.callOperationWithMeta<SupportDashboardExport_exportResponse>(OPERATION_DEFINITIONS.SupportDashboardExport_export, args);
  }

}

export class TimesheetResource extends BaseClient {
  TimesheetAllocated_delete(args: TimesheetAllocated_deleteArgs): Promise<TimesheetAllocated_deleteResponse> {
    return this.callOperation<TimesheetAllocated_deleteResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_delete, args);
  }

  TimesheetAllocated_deleteWithMeta(args: TimesheetAllocated_deleteArgs): Promise<ApiResult<TimesheetAllocated_deleteResponse>> {
    return this.callOperationWithMeta<TimesheetAllocated_deleteResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_delete, args);
  }

  TimesheetAllocated_get(args: TimesheetAllocated_getArgs): Promise<TimesheetAllocated_getResponse> {
    return this.callOperation<TimesheetAllocated_getResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_get, args);
  }

  TimesheetAllocated_getWithMeta(args: TimesheetAllocated_getArgs): Promise<ApiResult<TimesheetAllocated_getResponse>> {
    return this.callOperationWithMeta<TimesheetAllocated_getResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_get, args);
  }

  TimesheetAllocated_post(args: TimesheetAllocated_postArgs): Promise<TimesheetAllocated_postResponse> {
    return this.callOperation<TimesheetAllocated_postResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_post, args);
  }

  TimesheetAllocated_postWithMeta(args: TimesheetAllocated_postArgs): Promise<ApiResult<TimesheetAllocated_postResponse>> {
    return this.callOperationWithMeta<TimesheetAllocated_postResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_post, args);
  }

  TimesheetAllocated_put(args: TimesheetAllocated_putArgs): Promise<TimesheetAllocated_putResponse> {
    return this.callOperation<TimesheetAllocated_putResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_put, args);
  }

  TimesheetAllocated_putWithMeta(args: TimesheetAllocated_putArgs): Promise<ApiResult<TimesheetAllocated_putResponse>> {
    return this.callOperationWithMeta<TimesheetAllocated_putResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_put, args);
  }

  TimesheetAllocated_search(args: TimesheetAllocated_searchArgs = {}): Promise<TimesheetAllocated_searchResponse> {
    return this.callOperation<TimesheetAllocated_searchResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_search, args);
  }

  TimesheetAllocated_searchWithMeta(args: TimesheetAllocated_searchArgs = {}): Promise<ApiResult<TimesheetAllocated_searchResponse>> {
    return this.callOperationWithMeta<TimesheetAllocated_searchResponse>(OPERATION_DEFINITIONS.TimesheetAllocated_search, args);
  }

  TimesheetAllocatedApprove_approve(args: TimesheetAllocatedApprove_approveArgs): Promise<TimesheetAllocatedApprove_approveResponse> {
    return this.callOperation<TimesheetAllocatedApprove_approveResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedApprove_approve, args);
  }

  TimesheetAllocatedApprove_approveWithMeta(args: TimesheetAllocatedApprove_approveArgs): Promise<ApiResult<TimesheetAllocatedApprove_approveResponse>> {
    return this.callOperationWithMeta<TimesheetAllocatedApprove_approveResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedApprove_approve, args);
  }

  TimesheetAllocatedApproveList_approveList(args: TimesheetAllocatedApproveList_approveListArgs = {}): Promise<TimesheetAllocatedApproveList_approveListResponse> {
    return this.callOperation<TimesheetAllocatedApproveList_approveListResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedApproveList_approveList, args);
  }

  TimesheetAllocatedApproveList_approveListWithMeta(args: TimesheetAllocatedApproveList_approveListArgs = {}): Promise<ApiResult<TimesheetAllocatedApproveList_approveListResponse>> {
    return this.callOperationWithMeta<TimesheetAllocatedApproveList_approveListResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedApproveList_approveList, args);
  }

  TimesheetAllocatedList_postList(args: TimesheetAllocatedList_postListArgs): Promise<TimesheetAllocatedList_postListResponse> {
    return this.callOperation<TimesheetAllocatedList_postListResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedList_postList, args);
  }

  TimesheetAllocatedList_postListWithMeta(args: TimesheetAllocatedList_postListArgs): Promise<ApiResult<TimesheetAllocatedList_postListResponse>> {
    return this.callOperationWithMeta<TimesheetAllocatedList_postListResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedList_postList, args);
  }

  TimesheetAllocatedList_putList(args: TimesheetAllocatedList_putListArgs): Promise<TimesheetAllocatedList_putListResponse> {
    return this.callOperation<TimesheetAllocatedList_putListResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedList_putList, args);
  }

  TimesheetAllocatedList_putListWithMeta(args: TimesheetAllocatedList_putListArgs): Promise<ApiResult<TimesheetAllocatedList_putListResponse>> {
    return this.callOperationWithMeta<TimesheetAllocatedList_putListResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedList_putList, args);
  }

  TimesheetAllocatedUnapprove_unapprove(args: TimesheetAllocatedUnapprove_unapproveArgs): Promise<TimesheetAllocatedUnapprove_unapproveResponse> {
    return this.callOperation<TimesheetAllocatedUnapprove_unapproveResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedUnapprove_unapprove, args);
  }

  TimesheetAllocatedUnapprove_unapproveWithMeta(args: TimesheetAllocatedUnapprove_unapproveArgs): Promise<ApiResult<TimesheetAllocatedUnapprove_unapproveResponse>> {
    return this.callOperationWithMeta<TimesheetAllocatedUnapprove_unapproveResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedUnapprove_unapprove, args);
  }

  TimesheetAllocatedUnapproveList_unapproveList(args: TimesheetAllocatedUnapproveList_unapproveListArgs = {}): Promise<TimesheetAllocatedUnapproveList_unapproveListResponse> {
    return this.callOperation<TimesheetAllocatedUnapproveList_unapproveListResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedUnapproveList_unapproveList, args);
  }

  TimesheetAllocatedUnapproveList_unapproveListWithMeta(args: TimesheetAllocatedUnapproveList_unapproveListArgs = {}): Promise<ApiResult<TimesheetAllocatedUnapproveList_unapproveListResponse>> {
    return this.callOperationWithMeta<TimesheetAllocatedUnapproveList_unapproveListResponse>(OPERATION_DEFINITIONS.TimesheetAllocatedUnapproveList_unapproveList, args);
  }

  TimesheetCompanyHoliday_delete(args: TimesheetCompanyHoliday_deleteArgs): Promise<TimesheetCompanyHoliday_deleteResponse> {
    return this.callOperation<TimesheetCompanyHoliday_deleteResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_delete, args);
  }

  TimesheetCompanyHoliday_deleteWithMeta(args: TimesheetCompanyHoliday_deleteArgs): Promise<ApiResult<TimesheetCompanyHoliday_deleteResponse>> {
    return this.callOperationWithMeta<TimesheetCompanyHoliday_deleteResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_delete, args);
  }

  TimesheetCompanyHoliday_get(args: TimesheetCompanyHoliday_getArgs): Promise<TimesheetCompanyHoliday_getResponse> {
    return this.callOperation<TimesheetCompanyHoliday_getResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_get, args);
  }

  TimesheetCompanyHoliday_getWithMeta(args: TimesheetCompanyHoliday_getArgs): Promise<ApiResult<TimesheetCompanyHoliday_getResponse>> {
    return this.callOperationWithMeta<TimesheetCompanyHoliday_getResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_get, args);
  }

  TimesheetCompanyHoliday_post(args: TimesheetCompanyHoliday_postArgs): Promise<TimesheetCompanyHoliday_postResponse> {
    return this.callOperation<TimesheetCompanyHoliday_postResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_post, args);
  }

  TimesheetCompanyHoliday_postWithMeta(args: TimesheetCompanyHoliday_postArgs): Promise<ApiResult<TimesheetCompanyHoliday_postResponse>> {
    return this.callOperationWithMeta<TimesheetCompanyHoliday_postResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_post, args);
  }

  TimesheetCompanyHoliday_put(args: TimesheetCompanyHoliday_putArgs): Promise<TimesheetCompanyHoliday_putResponse> {
    return this.callOperation<TimesheetCompanyHoliday_putResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_put, args);
  }

  TimesheetCompanyHoliday_putWithMeta(args: TimesheetCompanyHoliday_putArgs): Promise<ApiResult<TimesheetCompanyHoliday_putResponse>> {
    return this.callOperationWithMeta<TimesheetCompanyHoliday_putResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_put, args);
  }

  TimesheetCompanyHoliday_search(args: TimesheetCompanyHoliday_searchArgs = {}): Promise<TimesheetCompanyHoliday_searchResponse> {
    return this.callOperation<TimesheetCompanyHoliday_searchResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_search, args);
  }

  TimesheetCompanyHoliday_searchWithMeta(args: TimesheetCompanyHoliday_searchArgs = {}): Promise<ApiResult<TimesheetCompanyHoliday_searchResponse>> {
    return this.callOperationWithMeta<TimesheetCompanyHoliday_searchResponse>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_search, args);
  }

  TimesheetEntry_delete(args: TimesheetEntry_deleteArgs): Promise<TimesheetEntry_deleteResponse> {
    return this.callOperation<TimesheetEntry_deleteResponse>(OPERATION_DEFINITIONS.TimesheetEntry_delete, args);
  }

  TimesheetEntry_deleteWithMeta(args: TimesheetEntry_deleteArgs): Promise<ApiResult<TimesheetEntry_deleteResponse>> {
    return this.callOperationWithMeta<TimesheetEntry_deleteResponse>(OPERATION_DEFINITIONS.TimesheetEntry_delete, args);
  }

  TimesheetEntry_get(args: TimesheetEntry_getArgs): Promise<TimesheetEntry_getResponse> {
    return this.callOperation<TimesheetEntry_getResponse>(OPERATION_DEFINITIONS.TimesheetEntry_get, args);
  }

  TimesheetEntry_getWithMeta(args: TimesheetEntry_getArgs): Promise<ApiResult<TimesheetEntry_getResponse>> {
    return this.callOperationWithMeta<TimesheetEntry_getResponse>(OPERATION_DEFINITIONS.TimesheetEntry_get, args);
  }

  TimesheetEntry_post(args: TimesheetEntry_postArgs): Promise<TimesheetEntry_postResponse> {
    return this.callOperation<TimesheetEntry_postResponse>(OPERATION_DEFINITIONS.TimesheetEntry_post, args);
  }

  TimesheetEntry_postWithMeta(args: TimesheetEntry_postArgs): Promise<ApiResult<TimesheetEntry_postResponse>> {
    return this.callOperationWithMeta<TimesheetEntry_postResponse>(OPERATION_DEFINITIONS.TimesheetEntry_post, args);
  }

  TimesheetEntry_put(args: TimesheetEntry_putArgs): Promise<TimesheetEntry_putResponse> {
    return this.callOperation<TimesheetEntry_putResponse>(OPERATION_DEFINITIONS.TimesheetEntry_put, args);
  }

  TimesheetEntry_putWithMeta(args: TimesheetEntry_putArgs): Promise<ApiResult<TimesheetEntry_putResponse>> {
    return this.callOperationWithMeta<TimesheetEntry_putResponse>(OPERATION_DEFINITIONS.TimesheetEntry_put, args);
  }

  TimesheetEntry_search(args: TimesheetEntry_searchArgs = {}): Promise<TimesheetEntry_searchResponse> {
    return this.callOperation<TimesheetEntry_searchResponse>(OPERATION_DEFINITIONS.TimesheetEntry_search, args);
  }

  TimesheetEntry_searchWithMeta(args: TimesheetEntry_searchArgs = {}): Promise<ApiResult<TimesheetEntry_searchResponse>> {
    return this.callOperationWithMeta<TimesheetEntry_searchResponse>(OPERATION_DEFINITIONS.TimesheetEntry_search, args);
  }

  TimesheetEntryList_postList(args: TimesheetEntryList_postListArgs): Promise<TimesheetEntryList_postListResponse> {
    return this.callOperation<TimesheetEntryList_postListResponse>(OPERATION_DEFINITIONS.TimesheetEntryList_postList, args);
  }

  TimesheetEntryList_postListWithMeta(args: TimesheetEntryList_postListArgs): Promise<ApiResult<TimesheetEntryList_postListResponse>> {
    return this.callOperationWithMeta<TimesheetEntryList_postListResponse>(OPERATION_DEFINITIONS.TimesheetEntryList_postList, args);
  }

  TimesheetEntryList_putList(args: TimesheetEntryList_putListArgs): Promise<TimesheetEntryList_putListResponse> {
    return this.callOperation<TimesheetEntryList_putListResponse>(OPERATION_DEFINITIONS.TimesheetEntryList_putList, args);
  }

  TimesheetEntryList_putListWithMeta(args: TimesheetEntryList_putListArgs): Promise<ApiResult<TimesheetEntryList_putListResponse>> {
    return this.callOperationWithMeta<TimesheetEntryList_putListResponse>(OPERATION_DEFINITIONS.TimesheetEntryList_putList, args);
  }

  TimesheetEntryRecentActivities_getRecentActivities(args: TimesheetEntryRecentActivities_getRecentActivitiesArgs = {}): Promise<TimesheetEntryRecentActivities_getRecentActivitiesResponse> {
    return this.callOperation<TimesheetEntryRecentActivities_getRecentActivitiesResponse>(OPERATION_DEFINITIONS.TimesheetEntryRecentActivities_getRecentActivities, args);
  }

  TimesheetEntryRecentActivities_getRecentActivitiesWithMeta(args: TimesheetEntryRecentActivities_getRecentActivitiesArgs = {}): Promise<ApiResult<TimesheetEntryRecentActivities_getRecentActivitiesResponse>> {
    return this.callOperationWithMeta<TimesheetEntryRecentActivities_getRecentActivitiesResponse>(OPERATION_DEFINITIONS.TimesheetEntryRecentActivities_getRecentActivities, args);
  }

  TimesheetEntryRecentProjects_getRecentProjects(args: TimesheetEntryRecentProjects_getRecentProjectsArgs = {}): Promise<TimesheetEntryRecentProjects_getRecentProjectsResponse> {
    return this.callOperation<TimesheetEntryRecentProjects_getRecentProjectsResponse>(OPERATION_DEFINITIONS.TimesheetEntryRecentProjects_getRecentProjects, args);
  }

  TimesheetEntryRecentProjects_getRecentProjectsWithMeta(args: TimesheetEntryRecentProjects_getRecentProjectsArgs = {}): Promise<ApiResult<TimesheetEntryRecentProjects_getRecentProjectsResponse>> {
    return this.callOperationWithMeta<TimesheetEntryRecentProjects_getRecentProjectsResponse>(OPERATION_DEFINITIONS.TimesheetEntryRecentProjects_getRecentProjects, args);
  }

  TimesheetEntryTotalHours_getTotalHours(args: TimesheetEntryTotalHours_getTotalHoursArgs = {}): Promise<TimesheetEntryTotalHours_getTotalHoursResponse> {
    return this.callOperation<TimesheetEntryTotalHours_getTotalHoursResponse>(OPERATION_DEFINITIONS.TimesheetEntryTotalHours_getTotalHours, args);
  }

  TimesheetEntryTotalHours_getTotalHoursWithMeta(args: TimesheetEntryTotalHours_getTotalHoursArgs = {}): Promise<ApiResult<TimesheetEntryTotalHours_getTotalHoursResponse>> {
    return this.callOperationWithMeta<TimesheetEntryTotalHours_getTotalHoursResponse>(OPERATION_DEFINITIONS.TimesheetEntryTotalHours_getTotalHours, args);
  }

  TimesheetMonth_get(args: TimesheetMonth_getArgs): Promise<TimesheetMonth_getResponse> {
    return this.callOperation<TimesheetMonth_getResponse>(OPERATION_DEFINITIONS.TimesheetMonth_get, args);
  }

  TimesheetMonth_getWithMeta(args: TimesheetMonth_getArgs): Promise<ApiResult<TimesheetMonth_getResponse>> {
    return this.callOperationWithMeta<TimesheetMonth_getResponse>(OPERATION_DEFINITIONS.TimesheetMonth_get, args);
  }

  TimesheetMonthApprove_approve(args: TimesheetMonthApprove_approveArgs = {}): Promise<TimesheetMonthApprove_approveResponse> {
    return this.callOperation<TimesheetMonthApprove_approveResponse>(OPERATION_DEFINITIONS.TimesheetMonthApprove_approve, args);
  }

  TimesheetMonthApprove_approveWithMeta(args: TimesheetMonthApprove_approveArgs = {}): Promise<ApiResult<TimesheetMonthApprove_approveResponse>> {
    return this.callOperationWithMeta<TimesheetMonthApprove_approveResponse>(OPERATION_DEFINITIONS.TimesheetMonthApprove_approve, args);
  }

  TimesheetMonthByMonthNumber_getByMonthNumber(args: TimesheetMonthByMonthNumber_getByMonthNumberArgs = {}): Promise<TimesheetMonthByMonthNumber_getByMonthNumberResponse> {
    return this.callOperation<TimesheetMonthByMonthNumber_getByMonthNumberResponse>(OPERATION_DEFINITIONS.TimesheetMonthByMonthNumber_getByMonthNumber, args);
  }

  TimesheetMonthByMonthNumber_getByMonthNumberWithMeta(args: TimesheetMonthByMonthNumber_getByMonthNumberArgs = {}): Promise<ApiResult<TimesheetMonthByMonthNumber_getByMonthNumberResponse>> {
    return this.callOperationWithMeta<TimesheetMonthByMonthNumber_getByMonthNumberResponse>(OPERATION_DEFINITIONS.TimesheetMonthByMonthNumber_getByMonthNumber, args);
  }

  TimesheetMonthByMonthNumberList_getByMonthNumberList(args: TimesheetMonthByMonthNumberList_getByMonthNumberListArgs = {}): Promise<TimesheetMonthByMonthNumberList_getByMonthNumberListResponse> {
    return this.callOperation<TimesheetMonthByMonthNumberList_getByMonthNumberListResponse>(OPERATION_DEFINITIONS.TimesheetMonthByMonthNumberList_getByMonthNumberList, args);
  }

  TimesheetMonthByMonthNumberList_getByMonthNumberListWithMeta(args: TimesheetMonthByMonthNumberList_getByMonthNumberListArgs = {}): Promise<ApiResult<TimesheetMonthByMonthNumberList_getByMonthNumberListResponse>> {
    return this.callOperationWithMeta<TimesheetMonthByMonthNumberList_getByMonthNumberListResponse>(OPERATION_DEFINITIONS.TimesheetMonthByMonthNumberList_getByMonthNumberList, args);
  }

  TimesheetMonthComplete_complete(args: TimesheetMonthComplete_completeArgs = {}): Promise<TimesheetMonthComplete_completeResponse> {
    return this.callOperation<TimesheetMonthComplete_completeResponse>(OPERATION_DEFINITIONS.TimesheetMonthComplete_complete, args);
  }

  TimesheetMonthComplete_completeWithMeta(args: TimesheetMonthComplete_completeArgs = {}): Promise<ApiResult<TimesheetMonthComplete_completeResponse>> {
    return this.callOperationWithMeta<TimesheetMonthComplete_completeResponse>(OPERATION_DEFINITIONS.TimesheetMonthComplete_complete, args);
  }

  TimesheetMonthReopen_reopen(args: TimesheetMonthReopen_reopenArgs = {}): Promise<TimesheetMonthReopen_reopenResponse> {
    return this.callOperation<TimesheetMonthReopen_reopenResponse>(OPERATION_DEFINITIONS.TimesheetMonthReopen_reopen, args);
  }

  TimesheetMonthReopen_reopenWithMeta(args: TimesheetMonthReopen_reopenArgs = {}): Promise<ApiResult<TimesheetMonthReopen_reopenResponse>> {
    return this.callOperationWithMeta<TimesheetMonthReopen_reopenResponse>(OPERATION_DEFINITIONS.TimesheetMonthReopen_reopen, args);
  }

  TimesheetMonthUnapprove_unapprove(args: TimesheetMonthUnapprove_unapproveArgs = {}): Promise<TimesheetMonthUnapprove_unapproveResponse> {
    return this.callOperation<TimesheetMonthUnapprove_unapproveResponse>(OPERATION_DEFINITIONS.TimesheetMonthUnapprove_unapprove, args);
  }

  TimesheetMonthUnapprove_unapproveWithMeta(args: TimesheetMonthUnapprove_unapproveArgs = {}): Promise<ApiResult<TimesheetMonthUnapprove_unapproveResponse>> {
    return this.callOperationWithMeta<TimesheetMonthUnapprove_unapproveResponse>(OPERATION_DEFINITIONS.TimesheetMonthUnapprove_unapprove, args);
  }

  TimesheetSalaryProjectTypeSpecification_delete(args: TimesheetSalaryProjectTypeSpecification_deleteArgs): Promise<TimesheetSalaryProjectTypeSpecification_deleteResponse> {
    return this.callOperation<TimesheetSalaryProjectTypeSpecification_deleteResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_delete, args);
  }

  TimesheetSalaryProjectTypeSpecification_deleteWithMeta(args: TimesheetSalaryProjectTypeSpecification_deleteArgs): Promise<ApiResult<TimesheetSalaryProjectTypeSpecification_deleteResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryProjectTypeSpecification_deleteResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_delete, args);
  }

  TimesheetSalaryProjectTypeSpecification_get(args: TimesheetSalaryProjectTypeSpecification_getArgs): Promise<TimesheetSalaryProjectTypeSpecification_getResponse> {
    return this.callOperation<TimesheetSalaryProjectTypeSpecification_getResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_get, args);
  }

  TimesheetSalaryProjectTypeSpecification_getWithMeta(args: TimesheetSalaryProjectTypeSpecification_getArgs): Promise<ApiResult<TimesheetSalaryProjectTypeSpecification_getResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryProjectTypeSpecification_getResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_get, args);
  }

  TimesheetSalaryProjectTypeSpecification_post(args: TimesheetSalaryProjectTypeSpecification_postArgs): Promise<TimesheetSalaryProjectTypeSpecification_postResponse> {
    return this.callOperation<TimesheetSalaryProjectTypeSpecification_postResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_post, args);
  }

  TimesheetSalaryProjectTypeSpecification_postWithMeta(args: TimesheetSalaryProjectTypeSpecification_postArgs): Promise<ApiResult<TimesheetSalaryProjectTypeSpecification_postResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryProjectTypeSpecification_postResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_post, args);
  }

  TimesheetSalaryProjectTypeSpecification_put(args: TimesheetSalaryProjectTypeSpecification_putArgs): Promise<TimesheetSalaryProjectTypeSpecification_putResponse> {
    return this.callOperation<TimesheetSalaryProjectTypeSpecification_putResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_put, args);
  }

  TimesheetSalaryProjectTypeSpecification_putWithMeta(args: TimesheetSalaryProjectTypeSpecification_putArgs): Promise<ApiResult<TimesheetSalaryProjectTypeSpecification_putResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryProjectTypeSpecification_putResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_put, args);
  }

  TimesheetSalaryProjectTypeSpecification_search(args: TimesheetSalaryProjectTypeSpecification_searchArgs = {}): Promise<TimesheetSalaryProjectTypeSpecification_searchResponse> {
    return this.callOperation<TimesheetSalaryProjectTypeSpecification_searchResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_search, args);
  }

  TimesheetSalaryProjectTypeSpecification_searchWithMeta(args: TimesheetSalaryProjectTypeSpecification_searchArgs = {}): Promise<ApiResult<TimesheetSalaryProjectTypeSpecification_searchResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryProjectTypeSpecification_searchResponse>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_search, args);
  }

  TimesheetSalaryTypeSpecification_delete(args: TimesheetSalaryTypeSpecification_deleteArgs): Promise<TimesheetSalaryTypeSpecification_deleteResponse> {
    return this.callOperation<TimesheetSalaryTypeSpecification_deleteResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_delete, args);
  }

  TimesheetSalaryTypeSpecification_deleteWithMeta(args: TimesheetSalaryTypeSpecification_deleteArgs): Promise<ApiResult<TimesheetSalaryTypeSpecification_deleteResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryTypeSpecification_deleteResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_delete, args);
  }

  TimesheetSalaryTypeSpecification_get(args: TimesheetSalaryTypeSpecification_getArgs): Promise<TimesheetSalaryTypeSpecification_getResponse> {
    return this.callOperation<TimesheetSalaryTypeSpecification_getResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_get, args);
  }

  TimesheetSalaryTypeSpecification_getWithMeta(args: TimesheetSalaryTypeSpecification_getArgs): Promise<ApiResult<TimesheetSalaryTypeSpecification_getResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryTypeSpecification_getResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_get, args);
  }

  TimesheetSalaryTypeSpecification_post(args: TimesheetSalaryTypeSpecification_postArgs): Promise<TimesheetSalaryTypeSpecification_postResponse> {
    return this.callOperation<TimesheetSalaryTypeSpecification_postResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_post, args);
  }

  TimesheetSalaryTypeSpecification_postWithMeta(args: TimesheetSalaryTypeSpecification_postArgs): Promise<ApiResult<TimesheetSalaryTypeSpecification_postResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryTypeSpecification_postResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_post, args);
  }

  TimesheetSalaryTypeSpecification_put(args: TimesheetSalaryTypeSpecification_putArgs): Promise<TimesheetSalaryTypeSpecification_putResponse> {
    return this.callOperation<TimesheetSalaryTypeSpecification_putResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_put, args);
  }

  TimesheetSalaryTypeSpecification_putWithMeta(args: TimesheetSalaryTypeSpecification_putArgs): Promise<ApiResult<TimesheetSalaryTypeSpecification_putResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryTypeSpecification_putResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_put, args);
  }

  TimesheetSalaryTypeSpecification_search(args: TimesheetSalaryTypeSpecification_searchArgs = {}): Promise<TimesheetSalaryTypeSpecification_searchResponse> {
    return this.callOperation<TimesheetSalaryTypeSpecification_searchResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_search, args);
  }

  TimesheetSalaryTypeSpecification_searchWithMeta(args: TimesheetSalaryTypeSpecification_searchArgs = {}): Promise<ApiResult<TimesheetSalaryTypeSpecification_searchResponse>> {
    return this.callOperationWithMeta<TimesheetSalaryTypeSpecification_searchResponse>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_search, args);
  }

  TimesheetSettings_get(args: TimesheetSettings_getArgs = {}): Promise<TimesheetSettings_getResponse> {
    return this.callOperation<TimesheetSettings_getResponse>(OPERATION_DEFINITIONS.TimesheetSettings_get, args);
  }

  TimesheetSettings_getWithMeta(args: TimesheetSettings_getArgs = {}): Promise<ApiResult<TimesheetSettings_getResponse>> {
    return this.callOperationWithMeta<TimesheetSettings_getResponse>(OPERATION_DEFINITIONS.TimesheetSettings_get, args);
  }

  TimesheetTimeClock_get(args: TimesheetTimeClock_getArgs): Promise<TimesheetTimeClock_getResponse> {
    return this.callOperation<TimesheetTimeClock_getResponse>(OPERATION_DEFINITIONS.TimesheetTimeClock_get, args);
  }

  TimesheetTimeClock_getWithMeta(args: TimesheetTimeClock_getArgs): Promise<ApiResult<TimesheetTimeClock_getResponse>> {
    return this.callOperationWithMeta<TimesheetTimeClock_getResponse>(OPERATION_DEFINITIONS.TimesheetTimeClock_get, args);
  }

  TimesheetTimeClock_put(args: TimesheetTimeClock_putArgs): Promise<TimesheetTimeClock_putResponse> {
    return this.callOperation<TimesheetTimeClock_putResponse>(OPERATION_DEFINITIONS.TimesheetTimeClock_put, args);
  }

  TimesheetTimeClock_putWithMeta(args: TimesheetTimeClock_putArgs): Promise<ApiResult<TimesheetTimeClock_putResponse>> {
    return this.callOperationWithMeta<TimesheetTimeClock_putResponse>(OPERATION_DEFINITIONS.TimesheetTimeClock_put, args);
  }

  TimesheetTimeClock_search(args: TimesheetTimeClock_searchArgs = {}): Promise<TimesheetTimeClock_searchResponse> {
    return this.callOperation<TimesheetTimeClock_searchResponse>(OPERATION_DEFINITIONS.TimesheetTimeClock_search, args);
  }

  TimesheetTimeClock_searchWithMeta(args: TimesheetTimeClock_searchArgs = {}): Promise<ApiResult<TimesheetTimeClock_searchResponse>> {
    return this.callOperationWithMeta<TimesheetTimeClock_searchResponse>(OPERATION_DEFINITIONS.TimesheetTimeClock_search, args);
  }

  TimesheetTimeClockPresent_getPresent(args: TimesheetTimeClockPresent_getPresentArgs = {}): Promise<TimesheetTimeClockPresent_getPresentResponse> {
    return this.callOperation<TimesheetTimeClockPresent_getPresentResponse>(OPERATION_DEFINITIONS.TimesheetTimeClockPresent_getPresent, args);
  }

  TimesheetTimeClockPresent_getPresentWithMeta(args: TimesheetTimeClockPresent_getPresentArgs = {}): Promise<ApiResult<TimesheetTimeClockPresent_getPresentResponse>> {
    return this.callOperationWithMeta<TimesheetTimeClockPresent_getPresentResponse>(OPERATION_DEFINITIONS.TimesheetTimeClockPresent_getPresent, args);
  }

  TimesheetTimeClockStart_start(args: TimesheetTimeClockStart_startArgs = {}): Promise<TimesheetTimeClockStart_startResponse> {
    return this.callOperation<TimesheetTimeClockStart_startResponse>(OPERATION_DEFINITIONS.TimesheetTimeClockStart_start, args);
  }

  TimesheetTimeClockStart_startWithMeta(args: TimesheetTimeClockStart_startArgs = {}): Promise<ApiResult<TimesheetTimeClockStart_startResponse>> {
    return this.callOperationWithMeta<TimesheetTimeClockStart_startResponse>(OPERATION_DEFINITIONS.TimesheetTimeClockStart_start, args);
  }

  TimesheetTimeClockStop_stop(args: TimesheetTimeClockStop_stopArgs): Promise<TimesheetTimeClockStop_stopResponse> {
    return this.callOperation<TimesheetTimeClockStop_stopResponse>(OPERATION_DEFINITIONS.TimesheetTimeClockStop_stop, args);
  }

  TimesheetTimeClockStop_stopWithMeta(args: TimesheetTimeClockStop_stopArgs): Promise<ApiResult<TimesheetTimeClockStop_stopResponse>> {
    return this.callOperationWithMeta<TimesheetTimeClockStop_stopResponse>(OPERATION_DEFINITIONS.TimesheetTimeClockStop_stop, args);
  }

  TimesheetWeek_search(args: TimesheetWeek_searchArgs = {}): Promise<TimesheetWeek_searchResponse> {
    return this.callOperation<TimesheetWeek_searchResponse>(OPERATION_DEFINITIONS.TimesheetWeek_search, args);
  }

  TimesheetWeek_searchWithMeta(args: TimesheetWeek_searchArgs = {}): Promise<ApiResult<TimesheetWeek_searchResponse>> {
    return this.callOperationWithMeta<TimesheetWeek_searchResponse>(OPERATION_DEFINITIONS.TimesheetWeek_search, args);
  }

  TimesheetWeekApprove_approve(args: TimesheetWeekApprove_approveArgs = {}): Promise<TimesheetWeekApprove_approveResponse> {
    return this.callOperation<TimesheetWeekApprove_approveResponse>(OPERATION_DEFINITIONS.TimesheetWeekApprove_approve, args);
  }

  TimesheetWeekApprove_approveWithMeta(args: TimesheetWeekApprove_approveArgs = {}): Promise<ApiResult<TimesheetWeekApprove_approveResponse>> {
    return this.callOperationWithMeta<TimesheetWeekApprove_approveResponse>(OPERATION_DEFINITIONS.TimesheetWeekApprove_approve, args);
  }

  TimesheetWeekComplete_complete(args: TimesheetWeekComplete_completeArgs = {}): Promise<TimesheetWeekComplete_completeResponse> {
    return this.callOperation<TimesheetWeekComplete_completeResponse>(OPERATION_DEFINITIONS.TimesheetWeekComplete_complete, args);
  }

  TimesheetWeekComplete_completeWithMeta(args: TimesheetWeekComplete_completeArgs = {}): Promise<ApiResult<TimesheetWeekComplete_completeResponse>> {
    return this.callOperationWithMeta<TimesheetWeekComplete_completeResponse>(OPERATION_DEFINITIONS.TimesheetWeekComplete_complete, args);
  }

  TimesheetWeekReopen_reopen(args: TimesheetWeekReopen_reopenArgs = {}): Promise<TimesheetWeekReopen_reopenResponse> {
    return this.callOperation<TimesheetWeekReopen_reopenResponse>(OPERATION_DEFINITIONS.TimesheetWeekReopen_reopen, args);
  }

  TimesheetWeekReopen_reopenWithMeta(args: TimesheetWeekReopen_reopenArgs = {}): Promise<ApiResult<TimesheetWeekReopen_reopenResponse>> {
    return this.callOperationWithMeta<TimesheetWeekReopen_reopenResponse>(OPERATION_DEFINITIONS.TimesheetWeekReopen_reopen, args);
  }

  TimesheetWeekUnapprove_unapprove(args: TimesheetWeekUnapprove_unapproveArgs = {}): Promise<TimesheetWeekUnapprove_unapproveResponse> {
    return this.callOperation<TimesheetWeekUnapprove_unapproveResponse>(OPERATION_DEFINITIONS.TimesheetWeekUnapprove_unapprove, args);
  }

  TimesheetWeekUnapprove_unapproveWithMeta(args: TimesheetWeekUnapprove_unapproveArgs = {}): Promise<ApiResult<TimesheetWeekUnapprove_unapproveResponse>> {
    return this.callOperationWithMeta<TimesheetWeekUnapprove_unapproveResponse>(OPERATION_DEFINITIONS.TimesheetWeekUnapprove_unapprove, args);
  }

}

export class TokenResource extends BaseClient {
  TokenConsumerByToken_getByToken(args: TokenConsumerByToken_getByTokenArgs = {}): Promise<TokenConsumerByToken_getByTokenResponse> {
    return this.callOperation<TokenConsumerByToken_getByTokenResponse>(OPERATION_DEFINITIONS.TokenConsumerByToken_getByToken, args);
  }

  TokenConsumerByToken_getByTokenWithMeta(args: TokenConsumerByToken_getByTokenArgs = {}): Promise<ApiResult<TokenConsumerByToken_getByTokenResponse>> {
    return this.callOperationWithMeta<TokenConsumerByToken_getByTokenResponse>(OPERATION_DEFINITIONS.TokenConsumerByToken_getByToken, args);
  }

  TokenEmployeeCreate_create(args: TokenEmployeeCreate_createArgs = {}): Promise<TokenEmployeeCreate_createResponse> {
    return this.callOperation<TokenEmployeeCreate_createResponse>(OPERATION_DEFINITIONS.TokenEmployeeCreate_create, args);
  }

  TokenEmployeeCreate_createWithMeta(args: TokenEmployeeCreate_createArgs = {}): Promise<ApiResult<TokenEmployeeCreate_createResponse>> {
    return this.callOperationWithMeta<TokenEmployeeCreate_createResponse>(OPERATION_DEFINITIONS.TokenEmployeeCreate_create, args);
  }

  TokenSession_delete(args: TokenSession_deleteArgs): Promise<TokenSession_deleteResponse> {
    return this.callOperation<TokenSession_deleteResponse>(OPERATION_DEFINITIONS.TokenSession_delete, args);
  }

  TokenSession_deleteWithMeta(args: TokenSession_deleteArgs): Promise<ApiResult<TokenSession_deleteResponse>> {
    return this.callOperationWithMeta<TokenSession_deleteResponse>(OPERATION_DEFINITIONS.TokenSession_delete, args);
  }

  TokenSessionCreate_create(args: TokenSessionCreate_createArgs = {}): Promise<TokenSessionCreate_createResponse> {
    return this.callOperation<TokenSessionCreate_createResponse>(OPERATION_DEFINITIONS.TokenSessionCreate_create, args);
  }

  TokenSessionCreate_createWithMeta(args: TokenSessionCreate_createArgs = {}): Promise<ApiResult<TokenSessionCreate_createResponse>> {
    return this.callOperationWithMeta<TokenSessionCreate_createResponse>(OPERATION_DEFINITIONS.TokenSessionCreate_create, args);
  }

  TokenSessionCreate_createWithBody(args: TokenSessionCreate_createWithBodyArgs): Promise<TokenSessionCreate_createWithBodyResponse> {
    return this.callOperation<TokenSessionCreate_createWithBodyResponse>(OPERATION_DEFINITIONS.TokenSessionCreate_createWithBody, args);
  }

  TokenSessionCreate_createWithBodyWithMeta(args: TokenSessionCreate_createWithBodyArgs): Promise<ApiResult<TokenSessionCreate_createWithBodyResponse>> {
    return this.callOperationWithMeta<TokenSessionCreate_createWithBodyResponse>(OPERATION_DEFINITIONS.TokenSessionCreate_createWithBody, args);
  }

  TokenSessionWhoAmI_whoAmI(args: TokenSessionWhoAmI_whoAmIArgs = {}): Promise<TokenSessionWhoAmI_whoAmIResponse> {
    return this.callOperation<TokenSessionWhoAmI_whoAmIResponse>(OPERATION_DEFINITIONS.TokenSessionWhoAmI_whoAmI, args);
  }

  TokenSessionWhoAmI_whoAmIWithMeta(args: TokenSessionWhoAmI_whoAmIArgs = {}): Promise<ApiResult<TokenSessionWhoAmI_whoAmIResponse>> {
    return this.callOperationWithMeta<TokenSessionWhoAmI_whoAmIResponse>(OPERATION_DEFINITIONS.TokenSessionWhoAmI_whoAmI, args);
  }

}

export class TransportTypeResource extends BaseClient {
  TransportType_get(args: TransportType_getArgs): Promise<TransportType_getResponse> {
    return this.callOperation<TransportType_getResponse>(OPERATION_DEFINITIONS.TransportType_get, args);
  }

  TransportType_getWithMeta(args: TransportType_getArgs): Promise<ApiResult<TransportType_getResponse>> {
    return this.callOperationWithMeta<TransportType_getResponse>(OPERATION_DEFINITIONS.TransportType_get, args);
  }

  TransportType_search(args: TransportType_searchArgs = {}): Promise<TransportType_searchResponse> {
    return this.callOperation<TransportType_searchResponse>(OPERATION_DEFINITIONS.TransportType_search, args);
  }

  TransportType_searchWithMeta(args: TransportType_searchArgs = {}): Promise<ApiResult<TransportType_searchResponse>> {
    return this.callOperationWithMeta<TransportType_searchResponse>(OPERATION_DEFINITIONS.TransportType_search, args);
  }

}

export class TravelExpenseResource extends BaseClient {
  TravelExpense_delete(args: TravelExpense_deleteArgs): Promise<TravelExpense_deleteResponse> {
    return this.callOperation<TravelExpense_deleteResponse>(OPERATION_DEFINITIONS.TravelExpense_delete, args);
  }

  TravelExpense_deleteWithMeta(args: TravelExpense_deleteArgs): Promise<ApiResult<TravelExpense_deleteResponse>> {
    return this.callOperationWithMeta<TravelExpense_deleteResponse>(OPERATION_DEFINITIONS.TravelExpense_delete, args);
  }

  TravelExpense_get(args: TravelExpense_getArgs): Promise<TravelExpense_getResponse> {
    return this.callOperation<TravelExpense_getResponse>(OPERATION_DEFINITIONS.TravelExpense_get, args);
  }

  TravelExpense_getWithMeta(args: TravelExpense_getArgs): Promise<ApiResult<TravelExpense_getResponse>> {
    return this.callOperationWithMeta<TravelExpense_getResponse>(OPERATION_DEFINITIONS.TravelExpense_get, args);
  }

  TravelExpense_post(args: TravelExpense_postArgs): Promise<TravelExpense_postResponse> {
    return this.callOperation<TravelExpense_postResponse>(OPERATION_DEFINITIONS.TravelExpense_post, args);
  }

  TravelExpense_postWithMeta(args: TravelExpense_postArgs): Promise<ApiResult<TravelExpense_postResponse>> {
    return this.callOperationWithMeta<TravelExpense_postResponse>(OPERATION_DEFINITIONS.TravelExpense_post, args);
  }

  TravelExpense_put(args: TravelExpense_putArgs): Promise<TravelExpense_putResponse> {
    return this.callOperation<TravelExpense_putResponse>(OPERATION_DEFINITIONS.TravelExpense_put, args);
  }

  TravelExpense_putWithMeta(args: TravelExpense_putArgs): Promise<ApiResult<TravelExpense_putResponse>> {
    return this.callOperationWithMeta<TravelExpense_putResponse>(OPERATION_DEFINITIONS.TravelExpense_put, args);
  }

  TravelExpense_search(args: TravelExpense_searchArgs = {}): Promise<TravelExpense_searchResponse> {
    return this.callOperation<TravelExpense_searchResponse>(OPERATION_DEFINITIONS.TravelExpense_search, args);
  }

  TravelExpense_searchWithMeta(args: TravelExpense_searchArgs = {}): Promise<ApiResult<TravelExpense_searchResponse>> {
    return this.callOperationWithMeta<TravelExpense_searchResponse>(OPERATION_DEFINITIONS.TravelExpense_search, args);
  }

  TravelExpenseAccommodationAllowance_delete(args: TravelExpenseAccommodationAllowance_deleteArgs): Promise<TravelExpenseAccommodationAllowance_deleteResponse> {
    return this.callOperation<TravelExpenseAccommodationAllowance_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_delete, args);
  }

  TravelExpenseAccommodationAllowance_deleteWithMeta(args: TravelExpenseAccommodationAllowance_deleteArgs): Promise<ApiResult<TravelExpenseAccommodationAllowance_deleteResponse>> {
    return this.callOperationWithMeta<TravelExpenseAccommodationAllowance_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_delete, args);
  }

  TravelExpenseAccommodationAllowance_get(args: TravelExpenseAccommodationAllowance_getArgs): Promise<TravelExpenseAccommodationAllowance_getResponse> {
    return this.callOperation<TravelExpenseAccommodationAllowance_getResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_get, args);
  }

  TravelExpenseAccommodationAllowance_getWithMeta(args: TravelExpenseAccommodationAllowance_getArgs): Promise<ApiResult<TravelExpenseAccommodationAllowance_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseAccommodationAllowance_getResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_get, args);
  }

  TravelExpenseAccommodationAllowance_post(args: TravelExpenseAccommodationAllowance_postArgs): Promise<TravelExpenseAccommodationAllowance_postResponse> {
    return this.callOperation<TravelExpenseAccommodationAllowance_postResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_post, args);
  }

  TravelExpenseAccommodationAllowance_postWithMeta(args: TravelExpenseAccommodationAllowance_postArgs): Promise<ApiResult<TravelExpenseAccommodationAllowance_postResponse>> {
    return this.callOperationWithMeta<TravelExpenseAccommodationAllowance_postResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_post, args);
  }

  TravelExpenseAccommodationAllowance_put(args: TravelExpenseAccommodationAllowance_putArgs): Promise<TravelExpenseAccommodationAllowance_putResponse> {
    return this.callOperation<TravelExpenseAccommodationAllowance_putResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_put, args);
  }

  TravelExpenseAccommodationAllowance_putWithMeta(args: TravelExpenseAccommodationAllowance_putArgs): Promise<ApiResult<TravelExpenseAccommodationAllowance_putResponse>> {
    return this.callOperationWithMeta<TravelExpenseAccommodationAllowance_putResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_put, args);
  }

  TravelExpenseAccommodationAllowance_search(args: TravelExpenseAccommodationAllowance_searchArgs = {}): Promise<TravelExpenseAccommodationAllowance_searchResponse> {
    return this.callOperation<TravelExpenseAccommodationAllowance_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_search, args);
  }

  TravelExpenseAccommodationAllowance_searchWithMeta(args: TravelExpenseAccommodationAllowance_searchArgs = {}): Promise<ApiResult<TravelExpenseAccommodationAllowance_searchResponse>> {
    return this.callOperationWithMeta<TravelExpenseAccommodationAllowance_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_search, args);
  }

  TravelExpenseApprove_approve(args: TravelExpenseApprove_approveArgs = {}): Promise<TravelExpenseApprove_approveResponse> {
    return this.callOperation<TravelExpenseApprove_approveResponse>(OPERATION_DEFINITIONS.TravelExpenseApprove_approve, args);
  }

  TravelExpenseApprove_approveWithMeta(args: TravelExpenseApprove_approveArgs = {}): Promise<ApiResult<TravelExpenseApprove_approveResponse>> {
    return this.callOperationWithMeta<TravelExpenseApprove_approveResponse>(OPERATION_DEFINITIONS.TravelExpenseApprove_approve, args);
  }

  TravelExpenseAttachment_deleteAttachment(args: TravelExpenseAttachment_deleteAttachmentArgs): Promise<TravelExpenseAttachment_deleteAttachmentResponse> {
    return this.callOperation<TravelExpenseAttachment_deleteAttachmentResponse>(OPERATION_DEFINITIONS.TravelExpenseAttachment_deleteAttachment, args);
  }

  TravelExpenseAttachment_deleteAttachmentWithMeta(args: TravelExpenseAttachment_deleteAttachmentArgs): Promise<ApiResult<TravelExpenseAttachment_deleteAttachmentResponse>> {
    return this.callOperationWithMeta<TravelExpenseAttachment_deleteAttachmentResponse>(OPERATION_DEFINITIONS.TravelExpenseAttachment_deleteAttachment, args);
  }

  TravelExpenseAttachment_downloadAttachment(args: TravelExpenseAttachment_downloadAttachmentArgs): Promise<TravelExpenseAttachment_downloadAttachmentResponse> {
    return this.callOperation<TravelExpenseAttachment_downloadAttachmentResponse>(OPERATION_DEFINITIONS.TravelExpenseAttachment_downloadAttachment, args);
  }

  TravelExpenseAttachment_downloadAttachmentWithMeta(args: TravelExpenseAttachment_downloadAttachmentArgs): Promise<ApiResult<TravelExpenseAttachment_downloadAttachmentResponse>> {
    return this.callOperationWithMeta<TravelExpenseAttachment_downloadAttachmentResponse>(OPERATION_DEFINITIONS.TravelExpenseAttachment_downloadAttachment, args);
  }

  TravelExpenseAttachment_uploadAttachment(args: TravelExpenseAttachment_uploadAttachmentArgs): Promise<TravelExpenseAttachment_uploadAttachmentResponse> {
    return this.callOperation<TravelExpenseAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.TravelExpenseAttachment_uploadAttachment, args);
  }

  TravelExpenseAttachment_uploadAttachmentWithMeta(args: TravelExpenseAttachment_uploadAttachmentArgs): Promise<ApiResult<TravelExpenseAttachment_uploadAttachmentResponse>> {
    return this.callOperationWithMeta<TravelExpenseAttachment_uploadAttachmentResponse>(OPERATION_DEFINITIONS.TravelExpenseAttachment_uploadAttachment, args);
  }

  TravelExpenseAttachmentList_uploadAttachments(args: TravelExpenseAttachmentList_uploadAttachmentsArgs): Promise<TravelExpenseAttachmentList_uploadAttachmentsResponse> {
    return this.callOperation<TravelExpenseAttachmentList_uploadAttachmentsResponse>(OPERATION_DEFINITIONS.TravelExpenseAttachmentList_uploadAttachments, args);
  }

  TravelExpenseAttachmentList_uploadAttachmentsWithMeta(args: TravelExpenseAttachmentList_uploadAttachmentsArgs): Promise<ApiResult<TravelExpenseAttachmentList_uploadAttachmentsResponse>> {
    return this.callOperationWithMeta<TravelExpenseAttachmentList_uploadAttachmentsResponse>(OPERATION_DEFINITIONS.TravelExpenseAttachmentList_uploadAttachments, args);
  }

  TravelExpenseConvert_convert(args: TravelExpenseConvert_convertArgs): Promise<TravelExpenseConvert_convertResponse> {
    return this.callOperation<TravelExpenseConvert_convertResponse>(OPERATION_DEFINITIONS.TravelExpenseConvert_convert, args);
  }

  TravelExpenseConvert_convertWithMeta(args: TravelExpenseConvert_convertArgs): Promise<ApiResult<TravelExpenseConvert_convertResponse>> {
    return this.callOperationWithMeta<TravelExpenseConvert_convertResponse>(OPERATION_DEFINITIONS.TravelExpenseConvert_convert, args);
  }

  TravelExpenseCopy_copy(args: TravelExpenseCopy_copyArgs = {}): Promise<TravelExpenseCopy_copyResponse> {
    return this.callOperation<TravelExpenseCopy_copyResponse>(OPERATION_DEFINITIONS.TravelExpenseCopy_copy, args);
  }

  TravelExpenseCopy_copyWithMeta(args: TravelExpenseCopy_copyArgs = {}): Promise<ApiResult<TravelExpenseCopy_copyResponse>> {
    return this.callOperationWithMeta<TravelExpenseCopy_copyResponse>(OPERATION_DEFINITIONS.TravelExpenseCopy_copy, args);
  }

  TravelExpenseCost_delete(args: TravelExpenseCost_deleteArgs): Promise<TravelExpenseCost_deleteResponse> {
    return this.callOperation<TravelExpenseCost_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_delete, args);
  }

  TravelExpenseCost_deleteWithMeta(args: TravelExpenseCost_deleteArgs): Promise<ApiResult<TravelExpenseCost_deleteResponse>> {
    return this.callOperationWithMeta<TravelExpenseCost_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_delete, args);
  }

  TravelExpenseCost_get(args: TravelExpenseCost_getArgs): Promise<TravelExpenseCost_getResponse> {
    return this.callOperation<TravelExpenseCost_getResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_get, args);
  }

  TravelExpenseCost_getWithMeta(args: TravelExpenseCost_getArgs): Promise<ApiResult<TravelExpenseCost_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseCost_getResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_get, args);
  }

  TravelExpenseCost_post(args: TravelExpenseCost_postArgs): Promise<TravelExpenseCost_postResponse> {
    return this.callOperation<TravelExpenseCost_postResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_post, args);
  }

  TravelExpenseCost_postWithMeta(args: TravelExpenseCost_postArgs): Promise<ApiResult<TravelExpenseCost_postResponse>> {
    return this.callOperationWithMeta<TravelExpenseCost_postResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_post, args);
  }

  TravelExpenseCost_put(args: TravelExpenseCost_putArgs): Promise<TravelExpenseCost_putResponse> {
    return this.callOperation<TravelExpenseCost_putResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_put, args);
  }

  TravelExpenseCost_putWithMeta(args: TravelExpenseCost_putArgs): Promise<ApiResult<TravelExpenseCost_putResponse>> {
    return this.callOperationWithMeta<TravelExpenseCost_putResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_put, args);
  }

  TravelExpenseCost_search(args: TravelExpenseCost_searchArgs = {}): Promise<TravelExpenseCost_searchResponse> {
    return this.callOperation<TravelExpenseCost_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_search, args);
  }

  TravelExpenseCost_searchWithMeta(args: TravelExpenseCost_searchArgs = {}): Promise<ApiResult<TravelExpenseCost_searchResponse>> {
    return this.callOperationWithMeta<TravelExpenseCost_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseCost_search, args);
  }

  TravelExpenseCostCategory_get(args: TravelExpenseCostCategory_getArgs): Promise<TravelExpenseCostCategory_getResponse> {
    return this.callOperation<TravelExpenseCostCategory_getResponse>(OPERATION_DEFINITIONS.TravelExpenseCostCategory_get, args);
  }

  TravelExpenseCostCategory_getWithMeta(args: TravelExpenseCostCategory_getArgs): Promise<ApiResult<TravelExpenseCostCategory_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostCategory_getResponse>(OPERATION_DEFINITIONS.TravelExpenseCostCategory_get, args);
  }

  TravelExpenseCostCategory_search(args: TravelExpenseCostCategory_searchArgs = {}): Promise<TravelExpenseCostCategory_searchResponse> {
    return this.callOperation<TravelExpenseCostCategory_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseCostCategory_search, args);
  }

  TravelExpenseCostCategory_searchWithMeta(args: TravelExpenseCostCategory_searchArgs = {}): Promise<ApiResult<TravelExpenseCostCategory_searchResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostCategory_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseCostCategory_search, args);
  }

  TravelExpenseCostList_putList(args: TravelExpenseCostList_putListArgs): Promise<TravelExpenseCostList_putListResponse> {
    return this.callOperation<TravelExpenseCostList_putListResponse>(OPERATION_DEFINITIONS.TravelExpenseCostList_putList, args);
  }

  TravelExpenseCostList_putListWithMeta(args: TravelExpenseCostList_putListArgs): Promise<ApiResult<TravelExpenseCostList_putListResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostList_putListResponse>(OPERATION_DEFINITIONS.TravelExpenseCostList_putList, args);
  }

  TravelExpenseCostParticipant_delete(args: TravelExpenseCostParticipant_deleteArgs): Promise<TravelExpenseCostParticipant_deleteResponse> {
    return this.callOperation<TravelExpenseCostParticipant_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_delete, args);
  }

  TravelExpenseCostParticipant_deleteWithMeta(args: TravelExpenseCostParticipant_deleteArgs): Promise<ApiResult<TravelExpenseCostParticipant_deleteResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostParticipant_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_delete, args);
  }

  TravelExpenseCostParticipant_get(args: TravelExpenseCostParticipant_getArgs): Promise<TravelExpenseCostParticipant_getResponse> {
    return this.callOperation<TravelExpenseCostParticipant_getResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_get, args);
  }

  TravelExpenseCostParticipant_getWithMeta(args: TravelExpenseCostParticipant_getArgs): Promise<ApiResult<TravelExpenseCostParticipant_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostParticipant_getResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_get, args);
  }

  TravelExpenseCostParticipant_post(args: TravelExpenseCostParticipant_postArgs): Promise<TravelExpenseCostParticipant_postResponse> {
    return this.callOperation<TravelExpenseCostParticipant_postResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_post, args);
  }

  TravelExpenseCostParticipant_postWithMeta(args: TravelExpenseCostParticipant_postArgs): Promise<ApiResult<TravelExpenseCostParticipant_postResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostParticipant_postResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_post, args);
  }

  TravelExpenseCostParticipantCostParticipants_getCostParticipants(args: TravelExpenseCostParticipantCostParticipants_getCostParticipantsArgs): Promise<TravelExpenseCostParticipantCostParticipants_getCostParticipantsResponse> {
    return this.callOperation<TravelExpenseCostParticipantCostParticipants_getCostParticipantsResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantCostParticipants_getCostParticipants, args);
  }

  TravelExpenseCostParticipantCostParticipants_getCostParticipantsWithMeta(args: TravelExpenseCostParticipantCostParticipants_getCostParticipantsArgs): Promise<ApiResult<TravelExpenseCostParticipantCostParticipants_getCostParticipantsResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostParticipantCostParticipants_getCostParticipantsResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantCostParticipants_getCostParticipants, args);
  }

  TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced(args: TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedArgs = {}): Promise<TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedResponse> {
    return this.callOperation<TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced, args);
  }

  TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedWithMeta(args: TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedArgs = {}): Promise<ApiResult<TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced, args);
  }

  TravelExpenseCostParticipantList_deleteList(args: TravelExpenseCostParticipantList_deleteListArgs): Promise<TravelExpenseCostParticipantList_deleteListResponse> {
    return this.callOperation<TravelExpenseCostParticipantList_deleteListResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantList_deleteList, args);
  }

  TravelExpenseCostParticipantList_deleteListWithMeta(args: TravelExpenseCostParticipantList_deleteListArgs): Promise<ApiResult<TravelExpenseCostParticipantList_deleteListResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostParticipantList_deleteListResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantList_deleteList, args);
  }

  TravelExpenseCostParticipantList_postList(args: TravelExpenseCostParticipantList_postListArgs): Promise<TravelExpenseCostParticipantList_postListResponse> {
    return this.callOperation<TravelExpenseCostParticipantList_postListResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantList_postList, args);
  }

  TravelExpenseCostParticipantList_postListWithMeta(args: TravelExpenseCostParticipantList_postListArgs): Promise<ApiResult<TravelExpenseCostParticipantList_postListResponse>> {
    return this.callOperationWithMeta<TravelExpenseCostParticipantList_postListResponse>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantList_postList, args);
  }

  TravelExpenseCreateVouchers_createVouchers(args: TravelExpenseCreateVouchers_createVouchersArgs = {}): Promise<TravelExpenseCreateVouchers_createVouchersResponse> {
    return this.callOperation<TravelExpenseCreateVouchers_createVouchersResponse>(OPERATION_DEFINITIONS.TravelExpenseCreateVouchers_createVouchers, args);
  }

  TravelExpenseCreateVouchers_createVouchersWithMeta(args: TravelExpenseCreateVouchers_createVouchersArgs = {}): Promise<ApiResult<TravelExpenseCreateVouchers_createVouchersResponse>> {
    return this.callOperationWithMeta<TravelExpenseCreateVouchers_createVouchersResponse>(OPERATION_DEFINITIONS.TravelExpenseCreateVouchers_createVouchers, args);
  }

  TravelExpenseDeliver_deliver(args: TravelExpenseDeliver_deliverArgs = {}): Promise<TravelExpenseDeliver_deliverResponse> {
    return this.callOperation<TravelExpenseDeliver_deliverResponse>(OPERATION_DEFINITIONS.TravelExpenseDeliver_deliver, args);
  }

  TravelExpenseDeliver_deliverWithMeta(args: TravelExpenseDeliver_deliverArgs = {}): Promise<ApiResult<TravelExpenseDeliver_deliverResponse>> {
    return this.callOperationWithMeta<TravelExpenseDeliver_deliverResponse>(OPERATION_DEFINITIONS.TravelExpenseDeliver_deliver, args);
  }

  TravelExpenseDrivingStop_delete(args: TravelExpenseDrivingStop_deleteArgs): Promise<TravelExpenseDrivingStop_deleteResponse> {
    return this.callOperation<TravelExpenseDrivingStop_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_delete, args);
  }

  TravelExpenseDrivingStop_deleteWithMeta(args: TravelExpenseDrivingStop_deleteArgs): Promise<ApiResult<TravelExpenseDrivingStop_deleteResponse>> {
    return this.callOperationWithMeta<TravelExpenseDrivingStop_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_delete, args);
  }

  TravelExpenseDrivingStop_get(args: TravelExpenseDrivingStop_getArgs): Promise<TravelExpenseDrivingStop_getResponse> {
    return this.callOperation<TravelExpenseDrivingStop_getResponse>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_get, args);
  }

  TravelExpenseDrivingStop_getWithMeta(args: TravelExpenseDrivingStop_getArgs): Promise<ApiResult<TravelExpenseDrivingStop_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseDrivingStop_getResponse>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_get, args);
  }

  TravelExpenseDrivingStop_post(args: TravelExpenseDrivingStop_postArgs): Promise<TravelExpenseDrivingStop_postResponse> {
    return this.callOperation<TravelExpenseDrivingStop_postResponse>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_post, args);
  }

  TravelExpenseDrivingStop_postWithMeta(args: TravelExpenseDrivingStop_postArgs): Promise<ApiResult<TravelExpenseDrivingStop_postResponse>> {
    return this.callOperationWithMeta<TravelExpenseDrivingStop_postResponse>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_post, args);
  }

  TravelExpenseMileageAllowance_delete(args: TravelExpenseMileageAllowance_deleteArgs): Promise<TravelExpenseMileageAllowance_deleteResponse> {
    return this.callOperation<TravelExpenseMileageAllowance_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_delete, args);
  }

  TravelExpenseMileageAllowance_deleteWithMeta(args: TravelExpenseMileageAllowance_deleteArgs): Promise<ApiResult<TravelExpenseMileageAllowance_deleteResponse>> {
    return this.callOperationWithMeta<TravelExpenseMileageAllowance_deleteResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_delete, args);
  }

  TravelExpenseMileageAllowance_get(args: TravelExpenseMileageAllowance_getArgs): Promise<TravelExpenseMileageAllowance_getResponse> {
    return this.callOperation<TravelExpenseMileageAllowance_getResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_get, args);
  }

  TravelExpenseMileageAllowance_getWithMeta(args: TravelExpenseMileageAllowance_getArgs): Promise<ApiResult<TravelExpenseMileageAllowance_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseMileageAllowance_getResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_get, args);
  }

  TravelExpenseMileageAllowance_post(args: TravelExpenseMileageAllowance_postArgs): Promise<TravelExpenseMileageAllowance_postResponse> {
    return this.callOperation<TravelExpenseMileageAllowance_postResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_post, args);
  }

  TravelExpenseMileageAllowance_postWithMeta(args: TravelExpenseMileageAllowance_postArgs): Promise<ApiResult<TravelExpenseMileageAllowance_postResponse>> {
    return this.callOperationWithMeta<TravelExpenseMileageAllowance_postResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_post, args);
  }

  TravelExpenseMileageAllowance_put(args: TravelExpenseMileageAllowance_putArgs): Promise<TravelExpenseMileageAllowance_putResponse> {
    return this.callOperation<TravelExpenseMileageAllowance_putResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_put, args);
  }

  TravelExpenseMileageAllowance_putWithMeta(args: TravelExpenseMileageAllowance_putArgs): Promise<ApiResult<TravelExpenseMileageAllowance_putResponse>> {
    return this.callOperationWithMeta<TravelExpenseMileageAllowance_putResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_put, args);
  }

  TravelExpenseMileageAllowance_search(args: TravelExpenseMileageAllowance_searchArgs = {}): Promise<TravelExpenseMileageAllowance_searchResponse> {
    return this.callOperation<TravelExpenseMileageAllowance_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_search, args);
  }

  TravelExpenseMileageAllowance_searchWithMeta(args: TravelExpenseMileageAllowance_searchArgs = {}): Promise<ApiResult<TravelExpenseMileageAllowance_searchResponse>> {
    return this.callOperationWithMeta<TravelExpenseMileageAllowance_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_search, args);
  }

  TravelExpensePassenger_delete(args: TravelExpensePassenger_deleteArgs): Promise<TravelExpensePassenger_deleteResponse> {
    return this.callOperation<TravelExpensePassenger_deleteResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_delete, args);
  }

  TravelExpensePassenger_deleteWithMeta(args: TravelExpensePassenger_deleteArgs): Promise<ApiResult<TravelExpensePassenger_deleteResponse>> {
    return this.callOperationWithMeta<TravelExpensePassenger_deleteResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_delete, args);
  }

  TravelExpensePassenger_get(args: TravelExpensePassenger_getArgs): Promise<TravelExpensePassenger_getResponse> {
    return this.callOperation<TravelExpensePassenger_getResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_get, args);
  }

  TravelExpensePassenger_getWithMeta(args: TravelExpensePassenger_getArgs): Promise<ApiResult<TravelExpensePassenger_getResponse>> {
    return this.callOperationWithMeta<TravelExpensePassenger_getResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_get, args);
  }

  TravelExpensePassenger_post(args: TravelExpensePassenger_postArgs): Promise<TravelExpensePassenger_postResponse> {
    return this.callOperation<TravelExpensePassenger_postResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_post, args);
  }

  TravelExpensePassenger_postWithMeta(args: TravelExpensePassenger_postArgs): Promise<ApiResult<TravelExpensePassenger_postResponse>> {
    return this.callOperationWithMeta<TravelExpensePassenger_postResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_post, args);
  }

  TravelExpensePassenger_put(args: TravelExpensePassenger_putArgs): Promise<TravelExpensePassenger_putResponse> {
    return this.callOperation<TravelExpensePassenger_putResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_put, args);
  }

  TravelExpensePassenger_putWithMeta(args: TravelExpensePassenger_putArgs): Promise<ApiResult<TravelExpensePassenger_putResponse>> {
    return this.callOperationWithMeta<TravelExpensePassenger_putResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_put, args);
  }

  TravelExpensePassenger_search(args: TravelExpensePassenger_searchArgs = {}): Promise<TravelExpensePassenger_searchResponse> {
    return this.callOperation<TravelExpensePassenger_searchResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_search, args);
  }

  TravelExpensePassenger_searchWithMeta(args: TravelExpensePassenger_searchArgs = {}): Promise<ApiResult<TravelExpensePassenger_searchResponse>> {
    return this.callOperationWithMeta<TravelExpensePassenger_searchResponse>(OPERATION_DEFINITIONS.TravelExpensePassenger_search, args);
  }

  TravelExpensePassengerList_deleteList(args: TravelExpensePassengerList_deleteListArgs): Promise<TravelExpensePassengerList_deleteListResponse> {
    return this.callOperation<TravelExpensePassengerList_deleteListResponse>(OPERATION_DEFINITIONS.TravelExpensePassengerList_deleteList, args);
  }

  TravelExpensePassengerList_deleteListWithMeta(args: TravelExpensePassengerList_deleteListArgs): Promise<ApiResult<TravelExpensePassengerList_deleteListResponse>> {
    return this.callOperationWithMeta<TravelExpensePassengerList_deleteListResponse>(OPERATION_DEFINITIONS.TravelExpensePassengerList_deleteList, args);
  }

  TravelExpensePassengerList_postList(args: TravelExpensePassengerList_postListArgs): Promise<TravelExpensePassengerList_postListResponse> {
    return this.callOperation<TravelExpensePassengerList_postListResponse>(OPERATION_DEFINITIONS.TravelExpensePassengerList_postList, args);
  }

  TravelExpensePassengerList_postListWithMeta(args: TravelExpensePassengerList_postListArgs): Promise<ApiResult<TravelExpensePassengerList_postListResponse>> {
    return this.callOperationWithMeta<TravelExpensePassengerList_postListResponse>(OPERATION_DEFINITIONS.TravelExpensePassengerList_postList, args);
  }

  TravelExpensePaymentType_get(args: TravelExpensePaymentType_getArgs): Promise<TravelExpensePaymentType_getResponse> {
    return this.callOperation<TravelExpensePaymentType_getResponse>(OPERATION_DEFINITIONS.TravelExpensePaymentType_get, args);
  }

  TravelExpensePaymentType_getWithMeta(args: TravelExpensePaymentType_getArgs): Promise<ApiResult<TravelExpensePaymentType_getResponse>> {
    return this.callOperationWithMeta<TravelExpensePaymentType_getResponse>(OPERATION_DEFINITIONS.TravelExpensePaymentType_get, args);
  }

  TravelExpensePaymentType_search(args: TravelExpensePaymentType_searchArgs = {}): Promise<TravelExpensePaymentType_searchResponse> {
    return this.callOperation<TravelExpensePaymentType_searchResponse>(OPERATION_DEFINITIONS.TravelExpensePaymentType_search, args);
  }

  TravelExpensePaymentType_searchWithMeta(args: TravelExpensePaymentType_searchArgs = {}): Promise<ApiResult<TravelExpensePaymentType_searchResponse>> {
    return this.callOperationWithMeta<TravelExpensePaymentType_searchResponse>(OPERATION_DEFINITIONS.TravelExpensePaymentType_search, args);
  }

  TravelExpensePerDiemCompensation_delete(args: TravelExpensePerDiemCompensation_deleteArgs): Promise<TravelExpensePerDiemCompensation_deleteResponse> {
    return this.callOperation<TravelExpensePerDiemCompensation_deleteResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_delete, args);
  }

  TravelExpensePerDiemCompensation_deleteWithMeta(args: TravelExpensePerDiemCompensation_deleteArgs): Promise<ApiResult<TravelExpensePerDiemCompensation_deleteResponse>> {
    return this.callOperationWithMeta<TravelExpensePerDiemCompensation_deleteResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_delete, args);
  }

  TravelExpensePerDiemCompensation_get(args: TravelExpensePerDiemCompensation_getArgs): Promise<TravelExpensePerDiemCompensation_getResponse> {
    return this.callOperation<TravelExpensePerDiemCompensation_getResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_get, args);
  }

  TravelExpensePerDiemCompensation_getWithMeta(args: TravelExpensePerDiemCompensation_getArgs): Promise<ApiResult<TravelExpensePerDiemCompensation_getResponse>> {
    return this.callOperationWithMeta<TravelExpensePerDiemCompensation_getResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_get, args);
  }

  TravelExpensePerDiemCompensation_post(args: TravelExpensePerDiemCompensation_postArgs): Promise<TravelExpensePerDiemCompensation_postResponse> {
    return this.callOperation<TravelExpensePerDiemCompensation_postResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_post, args);
  }

  TravelExpensePerDiemCompensation_postWithMeta(args: TravelExpensePerDiemCompensation_postArgs): Promise<ApiResult<TravelExpensePerDiemCompensation_postResponse>> {
    return this.callOperationWithMeta<TravelExpensePerDiemCompensation_postResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_post, args);
  }

  TravelExpensePerDiemCompensation_put(args: TravelExpensePerDiemCompensation_putArgs): Promise<TravelExpensePerDiemCompensation_putResponse> {
    return this.callOperation<TravelExpensePerDiemCompensation_putResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_put, args);
  }

  TravelExpensePerDiemCompensation_putWithMeta(args: TravelExpensePerDiemCompensation_putArgs): Promise<ApiResult<TravelExpensePerDiemCompensation_putResponse>> {
    return this.callOperationWithMeta<TravelExpensePerDiemCompensation_putResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_put, args);
  }

  TravelExpensePerDiemCompensation_search(args: TravelExpensePerDiemCompensation_searchArgs = {}): Promise<TravelExpensePerDiemCompensation_searchResponse> {
    return this.callOperation<TravelExpensePerDiemCompensation_searchResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_search, args);
  }

  TravelExpensePerDiemCompensation_searchWithMeta(args: TravelExpensePerDiemCompensation_searchArgs = {}): Promise<ApiResult<TravelExpensePerDiemCompensation_searchResponse>> {
    return this.callOperationWithMeta<TravelExpensePerDiemCompensation_searchResponse>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_search, args);
  }

  TravelExpenseRate_get(args: TravelExpenseRate_getArgs): Promise<TravelExpenseRate_getResponse> {
    return this.callOperation<TravelExpenseRate_getResponse>(OPERATION_DEFINITIONS.TravelExpenseRate_get, args);
  }

  TravelExpenseRate_getWithMeta(args: TravelExpenseRate_getArgs): Promise<ApiResult<TravelExpenseRate_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseRate_getResponse>(OPERATION_DEFINITIONS.TravelExpenseRate_get, args);
  }

  TravelExpenseRate_search(args: TravelExpenseRate_searchArgs = {}): Promise<TravelExpenseRate_searchResponse> {
    return this.callOperation<TravelExpenseRate_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseRate_search, args);
  }

  TravelExpenseRate_searchWithMeta(args: TravelExpenseRate_searchArgs = {}): Promise<ApiResult<TravelExpenseRate_searchResponse>> {
    return this.callOperationWithMeta<TravelExpenseRate_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseRate_search, args);
  }

  TravelExpenseRateCategory_get(args: TravelExpenseRateCategory_getArgs): Promise<TravelExpenseRateCategory_getResponse> {
    return this.callOperation<TravelExpenseRateCategory_getResponse>(OPERATION_DEFINITIONS.TravelExpenseRateCategory_get, args);
  }

  TravelExpenseRateCategory_getWithMeta(args: TravelExpenseRateCategory_getArgs): Promise<ApiResult<TravelExpenseRateCategory_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseRateCategory_getResponse>(OPERATION_DEFINITIONS.TravelExpenseRateCategory_get, args);
  }

  TravelExpenseRateCategory_search(args: TravelExpenseRateCategory_searchArgs = {}): Promise<TravelExpenseRateCategory_searchResponse> {
    return this.callOperation<TravelExpenseRateCategory_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseRateCategory_search, args);
  }

  TravelExpenseRateCategory_searchWithMeta(args: TravelExpenseRateCategory_searchArgs = {}): Promise<ApiResult<TravelExpenseRateCategory_searchResponse>> {
    return this.callOperationWithMeta<TravelExpenseRateCategory_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseRateCategory_search, args);
  }

  TravelExpenseRateCategoryGroup_get(args: TravelExpenseRateCategoryGroup_getArgs): Promise<TravelExpenseRateCategoryGroup_getResponse> {
    return this.callOperation<TravelExpenseRateCategoryGroup_getResponse>(OPERATION_DEFINITIONS.TravelExpenseRateCategoryGroup_get, args);
  }

  TravelExpenseRateCategoryGroup_getWithMeta(args: TravelExpenseRateCategoryGroup_getArgs): Promise<ApiResult<TravelExpenseRateCategoryGroup_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseRateCategoryGroup_getResponse>(OPERATION_DEFINITIONS.TravelExpenseRateCategoryGroup_get, args);
  }

  TravelExpenseRateCategoryGroup_search(args: TravelExpenseRateCategoryGroup_searchArgs = {}): Promise<TravelExpenseRateCategoryGroup_searchResponse> {
    return this.callOperation<TravelExpenseRateCategoryGroup_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseRateCategoryGroup_search, args);
  }

  TravelExpenseRateCategoryGroup_searchWithMeta(args: TravelExpenseRateCategoryGroup_searchArgs = {}): Promise<ApiResult<TravelExpenseRateCategoryGroup_searchResponse>> {
    return this.callOperationWithMeta<TravelExpenseRateCategoryGroup_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseRateCategoryGroup_search, args);
  }

  TravelExpenseSettings_get(args: TravelExpenseSettings_getArgs = {}): Promise<TravelExpenseSettings_getResponse> {
    return this.callOperation<TravelExpenseSettings_getResponse>(OPERATION_DEFINITIONS.TravelExpenseSettings_get, args);
  }

  TravelExpenseSettings_getWithMeta(args: TravelExpenseSettings_getArgs = {}): Promise<ApiResult<TravelExpenseSettings_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseSettings_getResponse>(OPERATION_DEFINITIONS.TravelExpenseSettings_get, args);
  }

  TravelExpenseUnapprove_unapprove(args: TravelExpenseUnapprove_unapproveArgs = {}): Promise<TravelExpenseUnapprove_unapproveResponse> {
    return this.callOperation<TravelExpenseUnapprove_unapproveResponse>(OPERATION_DEFINITIONS.TravelExpenseUnapprove_unapprove, args);
  }

  TravelExpenseUnapprove_unapproveWithMeta(args: TravelExpenseUnapprove_unapproveArgs = {}): Promise<ApiResult<TravelExpenseUnapprove_unapproveResponse>> {
    return this.callOperationWithMeta<TravelExpenseUnapprove_unapproveResponse>(OPERATION_DEFINITIONS.TravelExpenseUnapprove_unapprove, args);
  }

  TravelExpenseUndeliver_undeliver(args: TravelExpenseUndeliver_undeliverArgs = {}): Promise<TravelExpenseUndeliver_undeliverResponse> {
    return this.callOperation<TravelExpenseUndeliver_undeliverResponse>(OPERATION_DEFINITIONS.TravelExpenseUndeliver_undeliver, args);
  }

  TravelExpenseUndeliver_undeliverWithMeta(args: TravelExpenseUndeliver_undeliverArgs = {}): Promise<ApiResult<TravelExpenseUndeliver_undeliverResponse>> {
    return this.callOperationWithMeta<TravelExpenseUndeliver_undeliverResponse>(OPERATION_DEFINITIONS.TravelExpenseUndeliver_undeliver, args);
  }

  TravelExpenseZone_get(args: TravelExpenseZone_getArgs): Promise<TravelExpenseZone_getResponse> {
    return this.callOperation<TravelExpenseZone_getResponse>(OPERATION_DEFINITIONS.TravelExpenseZone_get, args);
  }

  TravelExpenseZone_getWithMeta(args: TravelExpenseZone_getArgs): Promise<ApiResult<TravelExpenseZone_getResponse>> {
    return this.callOperationWithMeta<TravelExpenseZone_getResponse>(OPERATION_DEFINITIONS.TravelExpenseZone_get, args);
  }

  TravelExpenseZone_search(args: TravelExpenseZone_searchArgs = {}): Promise<TravelExpenseZone_searchResponse> {
    return this.callOperation<TravelExpenseZone_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseZone_search, args);
  }

  TravelExpenseZone_searchWithMeta(args: TravelExpenseZone_searchArgs = {}): Promise<ApiResult<TravelExpenseZone_searchResponse>> {
    return this.callOperationWithMeta<TravelExpenseZone_searchResponse>(OPERATION_DEFINITIONS.TravelExpenseZone_search, args);
  }

}

export class UserLicenseResource extends BaseClient {
  UserLicenseExport_export(args: UserLicenseExport_exportArgs): Promise<UserLicenseExport_exportResponse> {
    return this.callOperation<UserLicenseExport_exportResponse>(OPERATION_DEFINITIONS.UserLicenseExport_export, args);
  }

  UserLicenseExport_exportWithMeta(args: UserLicenseExport_exportArgs): Promise<ApiResult<UserLicenseExport_exportResponse>> {
    return this.callOperationWithMeta<UserLicenseExport_exportResponse>(OPERATION_DEFINITIONS.UserLicenseExport_export, args);
  }

}

export class VatReturnsResource extends BaseClient {
  VatReturnsComment_query(args: VatReturnsComment_queryArgs = {}): Promise<VatReturnsComment_queryResponse> {
    return this.callOperation<VatReturnsComment_queryResponse>(OPERATION_DEFINITIONS.VatReturnsComment_query, args);
  }

  VatReturnsComment_queryWithMeta(args: VatReturnsComment_queryArgs = {}): Promise<ApiResult<VatReturnsComment_queryResponse>> {
    return this.callOperationWithMeta<VatReturnsComment_queryResponse>(OPERATION_DEFINITIONS.VatReturnsComment_query, args);
  }

  VatReturnsCommentAll_all(args: VatReturnsCommentAll_allArgs = {}): Promise<VatReturnsCommentAll_allResponse> {
    return this.callOperation<VatReturnsCommentAll_allResponse>(OPERATION_DEFINITIONS.VatReturnsCommentAll_all, args);
  }

  VatReturnsCommentAll_allWithMeta(args: VatReturnsCommentAll_allArgs = {}): Promise<ApiResult<VatReturnsCommentAll_allResponse>> {
    return this.callOperationWithMeta<VatReturnsCommentAll_allResponse>(OPERATION_DEFINITIONS.VatReturnsCommentAll_all, args);
  }

}

export class VatTermSizeSettingsResource extends BaseClient {
  VatTermSizeSettings_delete(args: VatTermSizeSettings_deleteArgs): Promise<VatTermSizeSettings_deleteResponse> {
    return this.callOperation<VatTermSizeSettings_deleteResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_delete, args);
  }

  VatTermSizeSettings_deleteWithMeta(args: VatTermSizeSettings_deleteArgs): Promise<ApiResult<VatTermSizeSettings_deleteResponse>> {
    return this.callOperationWithMeta<VatTermSizeSettings_deleteResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_delete, args);
  }

  VatTermSizeSettings_get(args: VatTermSizeSettings_getArgs): Promise<VatTermSizeSettings_getResponse> {
    return this.callOperation<VatTermSizeSettings_getResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_get, args);
  }

  VatTermSizeSettings_getWithMeta(args: VatTermSizeSettings_getArgs): Promise<ApiResult<VatTermSizeSettings_getResponse>> {
    return this.callOperationWithMeta<VatTermSizeSettings_getResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_get, args);
  }

  VatTermSizeSettings_post(args: VatTermSizeSettings_postArgs): Promise<VatTermSizeSettings_postResponse> {
    return this.callOperation<VatTermSizeSettings_postResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_post, args);
  }

  VatTermSizeSettings_postWithMeta(args: VatTermSizeSettings_postArgs): Promise<ApiResult<VatTermSizeSettings_postResponse>> {
    return this.callOperationWithMeta<VatTermSizeSettings_postResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_post, args);
  }

  VatTermSizeSettings_put(args: VatTermSizeSettings_putArgs): Promise<VatTermSizeSettings_putResponse> {
    return this.callOperation<VatTermSizeSettings_putResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_put, args);
  }

  VatTermSizeSettings_putWithMeta(args: VatTermSizeSettings_putArgs): Promise<ApiResult<VatTermSizeSettings_putResponse>> {
    return this.callOperationWithMeta<VatTermSizeSettings_putResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_put, args);
  }

  VatTermSizeSettings_query(args: VatTermSizeSettings_queryArgs = {}): Promise<VatTermSizeSettings_queryResponse> {
    return this.callOperation<VatTermSizeSettings_queryResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_query, args);
  }

  VatTermSizeSettings_queryWithMeta(args: VatTermSizeSettings_queryArgs = {}): Promise<ApiResult<VatTermSizeSettings_queryResponse>> {
    return this.callOperationWithMeta<VatTermSizeSettings_queryResponse>(OPERATION_DEFINITIONS.VatTermSizeSettings_query, args);
  }

}

export class VoucherApprovalListElementResource extends BaseClient {
  VoucherApprovalListElement_get(args: VoucherApprovalListElement_getArgs): Promise<VoucherApprovalListElement_getResponse> {
    return this.callOperation<VoucherApprovalListElement_getResponse>(OPERATION_DEFINITIONS.VoucherApprovalListElement_get, args);
  }

  VoucherApprovalListElement_getWithMeta(args: VoucherApprovalListElement_getArgs): Promise<ApiResult<VoucherApprovalListElement_getResponse>> {
    return this.callOperationWithMeta<VoucherApprovalListElement_getResponse>(OPERATION_DEFINITIONS.VoucherApprovalListElement_get, args);
  }

}

export class VoucherInboxResource extends BaseClient {
  VoucherInboxEmailAddress_getEmailAddress(args: VoucherInboxEmailAddress_getEmailAddressArgs = {}): Promise<VoucherInboxEmailAddress_getEmailAddressResponse> {
    return this.callOperation<VoucherInboxEmailAddress_getEmailAddressResponse>(OPERATION_DEFINITIONS.VoucherInboxEmailAddress_getEmailAddress, args);
  }

  VoucherInboxEmailAddress_getEmailAddressWithMeta(args: VoucherInboxEmailAddress_getEmailAddressArgs = {}): Promise<ApiResult<VoucherInboxEmailAddress_getEmailAddressResponse>> {
    return this.callOperationWithMeta<VoucherInboxEmailAddress_getEmailAddressResponse>(OPERATION_DEFINITIONS.VoucherInboxEmailAddress_getEmailAddress, args);
  }

  VoucherInboxInboxCount_getInboxCount(args: VoucherInboxInboxCount_getInboxCountArgs = {}): Promise<VoucherInboxInboxCount_getInboxCountResponse> {
    return this.callOperation<VoucherInboxInboxCount_getInboxCountResponse>(OPERATION_DEFINITIONS.VoucherInboxInboxCount_getInboxCount, args);
  }

  VoucherInboxInboxCount_getInboxCountWithMeta(args: VoucherInboxInboxCount_getInboxCountArgs = {}): Promise<ApiResult<VoucherInboxInboxCount_getInboxCountResponse>> {
    return this.callOperationWithMeta<VoucherInboxInboxCount_getInboxCountResponse>(OPERATION_DEFINITIONS.VoucherInboxInboxCount_getInboxCount, args);
  }

}

export class VoucherMessageResource extends BaseClient {
  VoucherMessage_post(args: VoucherMessage_postArgs): Promise<VoucherMessage_postResponse> {
    return this.callOperation<VoucherMessage_postResponse>(OPERATION_DEFINITIONS.VoucherMessage_post, args);
  }

  VoucherMessage_postWithMeta(args: VoucherMessage_postArgs): Promise<ApiResult<VoucherMessage_postResponse>> {
    return this.callOperationWithMeta<VoucherMessage_postResponse>(OPERATION_DEFINITIONS.VoucherMessage_post, args);
  }

  VoucherMessage_search(args: VoucherMessage_searchArgs = {}): Promise<VoucherMessage_searchResponse> {
    return this.callOperation<VoucherMessage_searchResponse>(OPERATION_DEFINITIONS.VoucherMessage_search, args);
  }

  VoucherMessage_searchWithMeta(args: VoucherMessage_searchArgs = {}): Promise<ApiResult<VoucherMessage_searchResponse>> {
    return this.callOperationWithMeta<VoucherMessage_searchResponse>(OPERATION_DEFINITIONS.VoucherMessage_search, args);
  }

}

export class VoucherStatusResource extends BaseClient {
  VoucherStatus_get(args: VoucherStatus_getArgs): Promise<VoucherStatus_getResponse> {
    return this.callOperation<VoucherStatus_getResponse>(OPERATION_DEFINITIONS.VoucherStatus_get, args);
  }

  VoucherStatus_getWithMeta(args: VoucherStatus_getArgs): Promise<ApiResult<VoucherStatus_getResponse>> {
    return this.callOperationWithMeta<VoucherStatus_getResponse>(OPERATION_DEFINITIONS.VoucherStatus_get, args);
  }

  VoucherStatus_post(args: VoucherStatus_postArgs): Promise<VoucherStatus_postResponse> {
    return this.callOperation<VoucherStatus_postResponse>(OPERATION_DEFINITIONS.VoucherStatus_post, args);
  }

  VoucherStatus_postWithMeta(args: VoucherStatus_postArgs): Promise<ApiResult<VoucherStatus_postResponse>> {
    return this.callOperationWithMeta<VoucherStatus_postResponse>(OPERATION_DEFINITIONS.VoucherStatus_post, args);
  }

  VoucherStatus_search(args: VoucherStatus_searchArgs = {}): Promise<VoucherStatus_searchResponse> {
    return this.callOperation<VoucherStatus_searchResponse>(OPERATION_DEFINITIONS.VoucherStatus_search, args);
  }

  VoucherStatus_searchWithMeta(args: VoucherStatus_searchArgs = {}): Promise<ApiResult<VoucherStatus_searchResponse>> {
    return this.callOperationWithMeta<VoucherStatus_searchResponse>(OPERATION_DEFINITIONS.VoucherStatus_search, args);
  }

}

export class YearEndResource extends BaseClient {
  YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes(args: YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesArgs = {}): Promise<YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesResponse> {
    return this.callOperation<YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesResponse>(OPERATION_DEFINITIONS.YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes, args);
  }

  YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesWithMeta(args: YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesArgs = {}): Promise<ApiResult<YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesResponse>> {
    return this.callOperationWithMeta<YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesResponse>(OPERATION_DEFINITIONS.YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes, args);
  }

  YearEndPenneoCasefiles_createCaseFile(args: YearEndPenneoCasefiles_createCaseFileArgs = {}): Promise<YearEndPenneoCasefiles_createCaseFileResponse> {
    return this.callOperation<YearEndPenneoCasefiles_createCaseFileResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_createCaseFile, args);
  }

  YearEndPenneoCasefiles_createCaseFileWithMeta(args: YearEndPenneoCasefiles_createCaseFileArgs = {}): Promise<ApiResult<YearEndPenneoCasefiles_createCaseFileResponse>> {
    return this.callOperationWithMeta<YearEndPenneoCasefiles_createCaseFileResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_createCaseFile, args);
  }

  YearEndPenneoCasefiles_deleteCaseFile(args: YearEndPenneoCasefiles_deleteCaseFileArgs): Promise<YearEndPenneoCasefiles_deleteCaseFileResponse> {
    return this.callOperation<YearEndPenneoCasefiles_deleteCaseFileResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_deleteCaseFile, args);
  }

  YearEndPenneoCasefiles_deleteCaseFileWithMeta(args: YearEndPenneoCasefiles_deleteCaseFileArgs): Promise<ApiResult<YearEndPenneoCasefiles_deleteCaseFileResponse>> {
    return this.callOperationWithMeta<YearEndPenneoCasefiles_deleteCaseFileResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_deleteCaseFile, args);
  }

  YearEndPenneoCasefiles_getCaseFiles(args: YearEndPenneoCasefiles_getCaseFilesArgs = {}): Promise<YearEndPenneoCasefiles_getCaseFilesResponse> {
    return this.callOperation<YearEndPenneoCasefiles_getCaseFilesResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_getCaseFiles, args);
  }

  YearEndPenneoCasefiles_getCaseFilesWithMeta(args: YearEndPenneoCasefiles_getCaseFilesArgs = {}): Promise<ApiResult<YearEndPenneoCasefiles_getCaseFilesResponse>> {
    return this.callOperationWithMeta<YearEndPenneoCasefiles_getCaseFilesResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_getCaseFiles, args);
  }

  YearEndPenneoCasefilesActivate_activateCaseFile(args: YearEndPenneoCasefilesActivate_activateCaseFileArgs): Promise<YearEndPenneoCasefilesActivate_activateCaseFileResponse> {
    return this.callOperation<YearEndPenneoCasefilesActivate_activateCaseFileResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesActivate_activateCaseFile, args);
  }

  YearEndPenneoCasefilesActivate_activateCaseFileWithMeta(args: YearEndPenneoCasefilesActivate_activateCaseFileArgs): Promise<ApiResult<YearEndPenneoCasefilesActivate_activateCaseFileResponse>> {
    return this.callOperationWithMeta<YearEndPenneoCasefilesActivate_activateCaseFileResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesActivate_activateCaseFile, args);
  }

  YearEndPenneoCasefilesSigners_deleteSigner(args: YearEndPenneoCasefilesSigners_deleteSignerArgs): Promise<YearEndPenneoCasefilesSigners_deleteSignerResponse> {
    return this.callOperation<YearEndPenneoCasefilesSigners_deleteSignerResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSigners_deleteSigner, args);
  }

  YearEndPenneoCasefilesSigners_deleteSignerWithMeta(args: YearEndPenneoCasefilesSigners_deleteSignerArgs): Promise<ApiResult<YearEndPenneoCasefilesSigners_deleteSignerResponse>> {
    return this.callOperationWithMeta<YearEndPenneoCasefilesSigners_deleteSignerResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSigners_deleteSigner, args);
  }

  YearEndPenneoCasefilesSignersReactivate_reactivateSigner(args: YearEndPenneoCasefilesSignersReactivate_reactivateSignerArgs): Promise<YearEndPenneoCasefilesSignersReactivate_reactivateSignerResponse> {
    return this.callOperation<YearEndPenneoCasefilesSignersReactivate_reactivateSignerResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSignersReactivate_reactivateSigner, args);
  }

  YearEndPenneoCasefilesSignersReactivate_reactivateSignerWithMeta(args: YearEndPenneoCasefilesSignersReactivate_reactivateSignerArgs): Promise<ApiResult<YearEndPenneoCasefilesSignersReactivate_reactivateSignerResponse>> {
    return this.callOperationWithMeta<YearEndPenneoCasefilesSignersReactivate_reactivateSignerResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSignersReactivate_reactivateSigner, args);
  }

  YearEndPenneoCasefilesSignersResend_resendSignLink(args: YearEndPenneoCasefilesSignersResend_resendSignLinkArgs): Promise<YearEndPenneoCasefilesSignersResend_resendSignLinkResponse> {
    return this.callOperation<YearEndPenneoCasefilesSignersResend_resendSignLinkResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSignersResend_resendSignLink, args);
  }

  YearEndPenneoCasefilesSignersResend_resendSignLinkWithMeta(args: YearEndPenneoCasefilesSignersResend_resendSignLinkArgs): Promise<ApiResult<YearEndPenneoCasefilesSignersResend_resendSignLinkResponse>> {
    return this.callOperationWithMeta<YearEndPenneoCasefilesSignersResend_resendSignLinkResponse>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSignersResend_resendSignLink, args);
  }

  YearEndPenneoDocuments_createDocument(args: YearEndPenneoDocuments_createDocumentArgs = {}): Promise<YearEndPenneoDocuments_createDocumentResponse> {
    return this.callOperation<YearEndPenneoDocuments_createDocumentResponse>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_createDocument, args);
  }

  YearEndPenneoDocuments_createDocumentWithMeta(args: YearEndPenneoDocuments_createDocumentArgs = {}): Promise<ApiResult<YearEndPenneoDocuments_createDocumentResponse>> {
    return this.callOperationWithMeta<YearEndPenneoDocuments_createDocumentResponse>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_createDocument, args);
  }

  YearEndPenneoDocuments_deleteDocument(args: YearEndPenneoDocuments_deleteDocumentArgs): Promise<YearEndPenneoDocuments_deleteDocumentResponse> {
    return this.callOperation<YearEndPenneoDocuments_deleteDocumentResponse>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_deleteDocument, args);
  }

  YearEndPenneoDocuments_deleteDocumentWithMeta(args: YearEndPenneoDocuments_deleteDocumentArgs): Promise<ApiResult<YearEndPenneoDocuments_deleteDocumentResponse>> {
    return this.callOperationWithMeta<YearEndPenneoDocuments_deleteDocumentResponse>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_deleteDocument, args);
  }

  YearEndPenneoDocuments_updateDocument(args: YearEndPenneoDocuments_updateDocumentArgs): Promise<YearEndPenneoDocuments_updateDocumentResponse> {
    return this.callOperation<YearEndPenneoDocuments_updateDocumentResponse>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_updateDocument, args);
  }

  YearEndPenneoDocuments_updateDocumentWithMeta(args: YearEndPenneoDocuments_updateDocumentArgs): Promise<ApiResult<YearEndPenneoDocuments_updateDocumentResponse>> {
    return this.callOperationWithMeta<YearEndPenneoDocuments_updateDocumentResponse>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_updateDocument, args);
  }

  YearEndPenneoDocumentsDownload_downloadDocument(args: YearEndPenneoDocumentsDownload_downloadDocumentArgs): Promise<YearEndPenneoDocumentsDownload_downloadDocumentResponse> {
    return this.callOperation<YearEndPenneoDocumentsDownload_downloadDocumentResponse>(OPERATION_DEFINITIONS.YearEndPenneoDocumentsDownload_downloadDocument, args);
  }

  YearEndPenneoDocumentsDownload_downloadDocumentWithMeta(args: YearEndPenneoDocumentsDownload_downloadDocumentArgs): Promise<ApiResult<YearEndPenneoDocumentsDownload_downloadDocumentResponse>> {
    return this.callOperationWithMeta<YearEndPenneoDocumentsDownload_downloadDocumentResponse>(OPERATION_DEFINITIONS.YearEndPenneoDocumentsDownload_downloadDocument, args);
  }

  YearEndPenneoRecipients_deleteRecipients(args: YearEndPenneoRecipients_deleteRecipientsArgs): Promise<YearEndPenneoRecipients_deleteRecipientsResponse> {
    return this.callOperation<YearEndPenneoRecipients_deleteRecipientsResponse>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_deleteRecipients, args);
  }

  YearEndPenneoRecipients_deleteRecipientsWithMeta(args: YearEndPenneoRecipients_deleteRecipientsArgs): Promise<ApiResult<YearEndPenneoRecipients_deleteRecipientsResponse>> {
    return this.callOperationWithMeta<YearEndPenneoRecipients_deleteRecipientsResponse>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_deleteRecipients, args);
  }

  YearEndPenneoRecipients_getRecipients(args: YearEndPenneoRecipients_getRecipientsArgs = {}): Promise<YearEndPenneoRecipients_getRecipientsResponse> {
    return this.callOperation<YearEndPenneoRecipients_getRecipientsResponse>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_getRecipients, args);
  }

  YearEndPenneoRecipients_getRecipientsWithMeta(args: YearEndPenneoRecipients_getRecipientsArgs = {}): Promise<ApiResult<YearEndPenneoRecipients_getRecipientsResponse>> {
    return this.callOperationWithMeta<YearEndPenneoRecipients_getRecipientsResponse>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_getRecipients, args);
  }

  YearEndPenneoRecipients_postRecipients(args: YearEndPenneoRecipients_postRecipientsArgs = {}): Promise<YearEndPenneoRecipients_postRecipientsResponse> {
    return this.callOperation<YearEndPenneoRecipients_postRecipientsResponse>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_postRecipients, args);
  }

  YearEndPenneoRecipients_postRecipientsWithMeta(args: YearEndPenneoRecipients_postRecipientsArgs = {}): Promise<ApiResult<YearEndPenneoRecipients_postRecipientsResponse>> {
    return this.callOperationWithMeta<YearEndPenneoRecipients_postRecipientsResponse>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_postRecipients, args);
  }

  YearEndPenneoSession_authenticateAndListCaseFiles(args: YearEndPenneoSession_authenticateAndListCaseFilesArgs = {}): Promise<YearEndPenneoSession_authenticateAndListCaseFilesResponse> {
    return this.callOperation<YearEndPenneoSession_authenticateAndListCaseFilesResponse>(OPERATION_DEFINITIONS.YearEndPenneoSession_authenticateAndListCaseFiles, args);
  }

  YearEndPenneoSession_authenticateAndListCaseFilesWithMeta(args: YearEndPenneoSession_authenticateAndListCaseFilesArgs = {}): Promise<ApiResult<YearEndPenneoSession_authenticateAndListCaseFilesResponse>> {
    return this.callOperationWithMeta<YearEndPenneoSession_authenticateAndListCaseFilesResponse>(OPERATION_DEFINITIONS.YearEndPenneoSession_authenticateAndListCaseFiles, args);
  }

  YearEndPenneoSignature_lines_createAndLinkSignatureLine(args: YearEndPenneoSignature_lines_createAndLinkSignatureLineArgs = {}): Promise<YearEndPenneoSignature_lines_createAndLinkSignatureLineResponse> {
    return this.callOperation<YearEndPenneoSignature_lines_createAndLinkSignatureLineResponse>(OPERATION_DEFINITIONS.YearEndPenneoSignature_lines_createAndLinkSignatureLine, args);
  }

  YearEndPenneoSignature_lines_createAndLinkSignatureLineWithMeta(args: YearEndPenneoSignature_lines_createAndLinkSignatureLineArgs = {}): Promise<ApiResult<YearEndPenneoSignature_lines_createAndLinkSignatureLineResponse>> {
    return this.callOperationWithMeta<YearEndPenneoSignature_lines_createAndLinkSignatureLineResponse>(OPERATION_DEFINITIONS.YearEndPenneoSignature_lines_createAndLinkSignatureLine, args);
  }

  YearEndPenneoSync_sync(args: YearEndPenneoSync_syncArgs = {}): Promise<YearEndPenneoSync_syncResponse> {
    return this.callOperation<YearEndPenneoSync_syncResponse>(OPERATION_DEFINITIONS.YearEndPenneoSync_sync, args);
  }

  YearEndPenneoSync_syncWithMeta(args: YearEndPenneoSync_syncArgs = {}): Promise<ApiResult<YearEndPenneoSync_syncResponse>> {
    return this.callOperationWithMeta<YearEndPenneoSync_syncResponse>(OPERATION_DEFINITIONS.YearEndPenneoSync_sync, args);
  }

  YearEndPenneoUpdateCompletedStatus_updateCompletedStatus(args: YearEndPenneoUpdateCompletedStatus_updateCompletedStatusArgs = {}): Promise<YearEndPenneoUpdateCompletedStatus_updateCompletedStatusResponse> {
    return this.callOperation<YearEndPenneoUpdateCompletedStatus_updateCompletedStatusResponse>(OPERATION_DEFINITIONS.YearEndPenneoUpdateCompletedStatus_updateCompletedStatus, args);
  }

  YearEndPenneoUpdateCompletedStatus_updateCompletedStatusWithMeta(args: YearEndPenneoUpdateCompletedStatus_updateCompletedStatusArgs = {}): Promise<ApiResult<YearEndPenneoUpdateCompletedStatus_updateCompletedStatusResponse>> {
    return this.callOperationWithMeta<YearEndPenneoUpdateCompletedStatus_updateCompletedStatusResponse>(OPERATION_DEFINITIONS.YearEndPenneoUpdateCompletedStatus_updateCompletedStatus, args);
  }

  YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024(args: YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Args = {}): Promise<YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Response> {
    return this.callOperation<YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Response>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024WithMeta(args: YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Args = {}): Promise<ApiResult<YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Response>> {
    return this.callOperationWithMeta<YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Response>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_get(args: YearEndResearchAndDevelopment2024_getArgs): Promise<YearEndResearchAndDevelopment2024_getResponse> {
    return this.callOperation<YearEndResearchAndDevelopment2024_getResponse>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_get, args);
  }

  YearEndResearchAndDevelopment2024_getWithMeta(args: YearEndResearchAndDevelopment2024_getArgs): Promise<ApiResult<YearEndResearchAndDevelopment2024_getResponse>> {
    return this.callOperationWithMeta<YearEndResearchAndDevelopment2024_getResponse>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_get, args);
  }

  YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024(args: YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Args = {}): Promise<YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Response> {
    return this.callOperation<YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Response>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024WithMeta(args: YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Args = {}): Promise<ApiResult<YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Response>> {
    return this.callOperationWithMeta<YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Response>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024(args: YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Args = {}): Promise<YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Response> {
    return this.callOperation<YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Response>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024WithMeta(args: YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Args = {}): Promise<ApiResult<YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Response>> {
    return this.callOperationWithMeta<YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Response>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024, args);
  }

}

export const resourceMixins = [
  AccountantDashboardResource,
  AccountingOfficeResource,
  ActivityResource,
  AssetResource,
  AttestationResource,
  BalanceResource,
  BalanceSheetResource,
  BankResource,
  CompanyResource,
  ContactResource,
  CountryResource,
  CrmResource,
  CurrencyResource,
  CustomerResource,
  DeliveryAddressResource,
  DepartmentResource,
  DivisionResource,
  DocumentResource,
  DocumentArchiveResource,
  EmployeeResource,
  EventResource,
  IncomingInvoiceResource,
  InternalResource,
  InventoryResource,
  InvoiceResource,
  InvoiceRemarkResource,
  LedgerResource,
  MunicipalityResource,
  OrderResource,
  PensionResource,
  PickupPointResource,
  PlatformAgnosticResource,
  ProductResource,
  ProjectResource,
  PurchaseOrderResource,
  ReminderResource,
  ResultbudgetResource,
  SaftResource,
  SalaryResource,
  SubscriptionResource,
  SupplierResource,
  SupplierCustomerResource,
  SupplierInvoiceResource,
  SupportDashboardResource,
  TimesheetResource,
  TokenResource,
  TransportTypeResource,
  TravelExpenseResource,
  UserLicenseResource,
  VatReturnsResource,
  VatTermSizeSettingsResource,
  VoucherApprovalListElementResource,
  VoucherInboxResource,
  VoucherMessageResource,
  VoucherStatusResource,
  YearEndResource,
] as const;

export type GeneratedResourceMixin = AccountantDashboardResource & AccountingOfficeResource & ActivityResource & AssetResource & AttestationResource & BalanceResource & BalanceSheetResource & BankResource & CompanyResource & ContactResource & CountryResource & CrmResource & CurrencyResource & CustomerResource & DeliveryAddressResource & DepartmentResource & DivisionResource & DocumentResource & DocumentArchiveResource & EmployeeResource & EventResource & IncomingInvoiceResource & InternalResource & InventoryResource & InvoiceResource & InvoiceRemarkResource & LedgerResource & MunicipalityResource & OrderResource & PensionResource & PickupPointResource & PlatformAgnosticResource & ProductResource & ProjectResource & PurchaseOrderResource & ReminderResource & ResultbudgetResource & SaftResource & SalaryResource & SubscriptionResource & SupplierResource & SupplierCustomerResource & SupplierInvoiceResource & SupportDashboardResource & TimesheetResource & TokenResource & TransportTypeResource & TravelExpenseResource & UserLicenseResource & VatReturnsResource & VatTermSizeSettingsResource & VoucherApprovalListElementResource & VoucherInboxResource & VoucherMessageResource & VoucherStatusResource & YearEndResource;
